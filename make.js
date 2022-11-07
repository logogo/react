const execSync = require("child_process").execSync;
const path = require("path")
let diff = getDiffFiles()

function getDiffFiles(type){
  let root = process.cwd()
  let files = execSync("git diff --cached --name-status HEAD").toString().split("\n")
  let result = []
  // add, delete, modified, renamed, copied
  type = type || "admrc"
  let types = type.split("").map(t => {
    return t.toLowerCase()
  })
  console.log(files)
  files.forEach(file => {
    if (!file) {
      return
    }
    let temp = file.split(/[\n\t]/)
    console.log(temp)
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

console.log(diff)