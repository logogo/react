const execSync = require("child_process").execSync;
const execFileSync = require("child_process").execFileSync;
const path = require('path');

const [STORE_PREFIX, BUCKET_NAME, BUILD_ENV] = process.argv.slice(2);
const { UPLOADED_HOST, UPLOADED_FOLDER } = process.env;
const COMMIT_ID = execSync("git rev-parse --short HEAD").toString().trim(); // 最后一次提交的id
const GETBRANCH = execSync("git rev-parse --abbrev-ref HEAD ").toString().trim(); // 获取当前分枝
const PUBLIC_URL = `https://${BUCKET_NAME}.s3.cn-north-1.jdcloud-oss.com/${STORE_PREFIX}/${COMMIT_ID}/`;
const PREFIX = `https://${BUCKET_NAME}.s3.cn-north-1.jdcloud-oss.com/${STORE_PREFIX}/`;
const PATH_PREFIX = `${STORE_PREFIX}/${COMMIT_ID}`
const FOLDER_PATH=`./${UPLOADED_FOLDER}`


/*if (execSync("git status --porcelain").toString().trim()) {
     console.error("项目没提交干净");
     //process.exit(1)
}*/

console.info(`build for ${STORE_PREFIX}, commit id: ${COMMIT_ID}, BUCKET_NAME is: ${BUCKET_NAME}`);

if (BUILD_ENV) {
     console.info(`PUBLIC_URL=${PUBLIC_URL} PREFIX=${PREFIX} ENV=${STORE_PREFIX} yarn build:${BUILD_ENV}`);
     //execSync(`yarn build`); //打包 
}

console.log(path.resolve(__dirname,'./cdne.js'))

console.log(execFileSync('node',[path.resolve(__dirname,'./cdn.js'), '11111111']).toString())

