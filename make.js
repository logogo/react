const execSync = require('child_process').execSync;
const path = require('path');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');
console.log(111111111111);
const diff = getDiffFiles();
compressPics(diff);

function getDiffFiles(type) {
    const root = process.cwd();
    const files = execSync('git diff --cached --name-status HEAD').toString().split('\n');
    const result = [];
    // add, delete, modified, renamed, copied
    type = type || 'admrc';
    const types = type.split('').map(t => {
        return t.toLowerCase();
    });
    files.forEach(file => {
        if (!file) {
            return;
        }
        const temp = file.split(/[\n\t]/);
        const status = temp[0].toLowerCase();
        const filePath = root + '/' + temp[1];
        const extName = path.extname(filePath).slice(1);

        if (types.length && ~types.indexOf(status)) {
            result.push({
                status, // admrc中的一个
                path: filePath, // 绝对路径
                subpath: temp[1], // 相对路径
                extName // 扩展名
            });
        }
    });
    return result;
}

async function compressPics(files) {
    // 过滤出add modified, .png、.jpg、.jpeg图片
    const filterExtNames = ['png', 'jpg', 'jpeg'];
    const filterTypes = ['a', 'm'];
    const imagemin = (await import('imagemin')).default;
    const images = files.filter(file => filterExtNames.includes(file.extName) && filterTypes.includes(file.status));
    console.log('待压缩的图片序列: ', images);
    const parentFolder = {};
    images.forEach(x => {
        // 根据不同父级目录分类
        const pf = x.subpath.slice(0, x.subpath.lastIndexOf('/'));
        parentFolder[pf] ? parentFolder[pf].push(x.subpath) : (parentFolder[pf] = [x.subpath]);
    });
    for (const pf in parentFolder) {
        try {
            imagemin(parentFolder[pf], {
            // 原图片目录
                destination: pf, // 生成图片的目录
                plugins: [
                    imageminJpegtran(),
                    imageminPngquant({
                        speed: 1,
                        quality: [0.6, 0.8]
                    })
                ]
            }).then(() => {
                execSync('git add .');
            });
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
}
