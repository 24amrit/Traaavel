// const express = require("express");
// const path = require("path");
// const app = express();
// const port = 8000;

// app.get('/', function(request, response){
//     response.sendFile(path.join(__dirname, 'index.html'));
// });

// app.use('/images', express.static('images'))

// app.get('/', (req, res)=>{
//     const params = { }
//     res.status(200).render('index.html', params);
// })

// app.get('*', function(request, response){});

// app.listen(port, ()=>{
//     console.log(`The application started successfully on port ${port}`);
// });

// 2

// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// http.createServer((req, res)=>{
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
//     fs.readFile(filename, function(err,data){
//         if(err){
//             res.writeHead(404,{'Content-Type':'text/html'});
//             return res.end("page not found")
//         }
//         res.writeHead(200, {'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// }).listen(8080);
// console.log("Server running on port 8080");

//3

// const express = require("express");
// const app = express();

// app.use(express.static("css"));

// var router = express.Router()

// app.use('/',router)

// router.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html")
// })

// app.listen(8080)