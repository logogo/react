const execSync = require("child_process").execSync;
const path = require("path")
const imageminPngquant = require("imagemin-pngquant")
const imageminJpegtran = require("imagemin-jpegtran")
let diff = getDiffFiles()
compressPics(diff)

function getDiffFiles(type){
  let root = process.cwd()
  let files = execSync("git diff --cached --name-status HEAD").toString().split("\n")
  let result = []
  // add, delete, modified, renamed, copied
  type = type || "admrc"
  let types = type.split("").map(t => {
    return t.toLowerCase()
  })
  files.forEach(file => {
    console.log(file)
    if (!file) {
      return
    }
    let temp = file.split(/[\n\t]/)
    let status = temp[0].toLowerCase()
    let filePath = root + "/" + temp[1]
    let extName = path.extname(filePath).slice(1)

    if (types.length && ~types.indexOf(status)) {
      result.push({
        status, // admrc中的一个
        path: filePath, // 绝对路径
        subpath: temp[1], // 相对路径
        extName // 扩展名
      })
    }
  })
  return result
}

async function compressPics(files) {
   // 过滤出add modified, .png、.jpg、.jpeg图片
   const filterExtNames = ["png", "jpg","jpeg"]
   const filterTypes = ["a", "m"]
   const imagemin = (await import('imagemin')).default
   let images = files.filter(file => filterExtNames.includes(file.extName) && filterTypes.includes(file.status))
   console.log('待压缩的图片序列: ' ,images)
   let parentFolder = {}
   images.forEach(x => {
     // 根据不同父级目录分类
     let pf = x.subpath.slice(0, x.subpath.lastIndexOf("/"))
     parentFolder[pf] ?
       parentFolder[pf].push(x.subpath) :
       (parentFolder[pf] = [x.subpath])
   }) 
   for (let pf in parentFolder) {
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
      })
      .then(() => {
        execSync('git add .')
      })
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }
}