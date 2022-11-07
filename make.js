const execSync = require("child_process").execSync;
const path = require("path")
let diff = getDiffFiles()

function getDiffFiles(type){
  let root = process.cwd()
  let files = execSync("git diff --cached --name-status HEAD").toString().split("\n")
console.log('git diff files:', execSync("git diff --cached --name-status HEAD"))
console.log(root)
  return 1111111
}

console.log(diff)