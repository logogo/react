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
  console.log(files.length)
  return 1111111
}

console.log(diff)