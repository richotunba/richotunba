const http = require("http");
const fs = require("fs");

//create server
 const server = http.createServer((req, res)=>{
     if (req.url ==="/") {
     fs.readFile("home.html", (err, data)=>{
        if (err) throw err;
    res.writeHead(200, { "content-type": "text/html" });
        
    res.write(data);
    res.end();
        
    })
    }

    if (req.url === "/about.html"){
        fs.readFile("about.html", (err, data) => {
            if (err) throw err;
            res.writeHead(200, {"content-type": "text/html"});
            res.write(data);
            res.end();
            
        })
    }
    if (req.url === "/contact.html"){
        fs.readFile("contact.html", (err, data)=>{
            if (err) throw err;
            res.writeHead(200, {"content-type": "text/html"});
            res.write(data);
            res.end();
        })
    }
        
    })
    server.listen(4000, '127.0.0.1');
    console.log('server created')