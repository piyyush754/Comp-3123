const os = require('os');
const http = require('http');
const fs = require('fs');
const path = require('path');

///console.log(os.cpus());
//console.log(os.homedir());
//console.log(os)

http.createServer((req, res) => {
    //res.write('hello world');;
    //res.end();
    //res.end('Hello World')

}).listen(3000, () =>{
    console.log('Server is running on port 3000');
});