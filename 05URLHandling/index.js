const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if(req.url == "/favicon.ico") return res.end();
    const myUrl = url.parse(req.url, true);
    // console.log(myUrl);
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myUrl.pathname){
            case "/": res.end("Hello from Server"); break;
            case "/about" : 
                const userName = myUrl.query.myName;
                res.end(`Hi ${userName},\nWelcome to my portfolio`); 
                break;
            default: res.end("404 Not Found");
        }
    });
});

myServer.listen(8000,()=>console.log("Server running in port no: 8000"));
