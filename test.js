const execSync = require("child_process").execSync;

console.info(process.argv.slice(2), 222);

const [STORE_PREFIX, BUCKET_NAME, BUILD_ENV] = process.argv.slice(2);
const { UPLOADED_HOST, UPLOADED_FOLDER } = process.env;

console.log(STORE_PREFIX, BUCKET_NAME, BUILD_ENV)
console.log(UPLOADED_HOST, UPLOADED_FOLDER)

if (
    execSync("git status --porcelain")
      .toString()
      .trim()
  ) {
     console.error("项目没提交干净");
     process.exit(1)
  }

  execSync("git rev-parse --short HEAD")
  .toString()
  .trim();
