const http = require('http');
const fs = require('fs');

//create a server with HTTP variable
const server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    // home page
    if(req.url=='/' || req.url=='/index' || req.url=='/home'){
        fs.readFile('./index.html', null, function(err, data){
            if(err){
                return res.status(500).json({message: err}) ;//internal server error
            }
            res.write(data);
            res.end();
        })
    }
    //about page
    if(req.url=='/about' ){
        fs.readFile('./about.html', null, function(err, data){
            if(err){
                return res.status(500).json({message: err}) ;
            }
            res.write(data);
            res.end();
        })
    }
    //contact page
    if(req.url=='/contact' ){
        fs.readFile('./contact.html', null, function(err, data){
            if(err){
                return res.status(500).json({message: err}) ;
            }
            res.write(data);
            res.end();
        })
    }

    });

//create a port
server.listen(4005, 'localhost'); 

console.log("You have successfully created a server!");
