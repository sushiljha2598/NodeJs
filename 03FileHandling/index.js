const fs = require('fs');
const os = require('os');

// Sync
// fs.writeFileSync("./test.txt","Hey there");

// Async
// fs.writeFile("./test.txt","Hey there Async",(err)=>{});

// const result = fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err) console.log("Error:",err);
//     else console.log(result);
// })

fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());

// fs.cpSync("./test.txt","./copy.txt");

// fs.unlinkSync("./copy.txt");
console.log(fs.statSync("./test.txt"));
fs.mkdirSync("my-docs/a/b",{recursive: true});

console.log(os.cpus().length);
