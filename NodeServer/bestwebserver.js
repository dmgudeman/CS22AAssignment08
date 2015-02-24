//The following function will be called when the server
// is handling a request
function servePage(request, response) {
    // Read the file asynchronously
   // The filename is hardcoded here - nodedemo.html is assumed to  be in a separate folder
    var resource = "." + url.parse(request.url).pathname;
    
    fs.readFile(resource, function( err, content) {
        if (err) { // If there is an error, set the status code
            response.writeHead( 404,
                               {'Content-Type': 'text/plain; charset = UTF-8'});
            response.write( err.message); // Include the error message body
            response.end(); // Done
        } else { // Otherwise, the file was read successfully.
            
          
           /* var extension = path.extname(resource);
            console.log("extension =" + extension);
                if (extension === ".html"){

                    return 'text/html; charset = UTF-8';
                }
        */
            console.log("url xx=" + resource);
            response.writeHead( 200, // Set the status code
                               {'Content-Type': 'text/html; charset = UTF-8'});
            response.write(content); // Send file contents as response body
            response.end();
        }
    });   
}
// Load the file system module
var fs = require("fs");
// load the http module
var http = require("http");

var url = require("url");

var path = require("path");
 
 



// create a server object
var server = http.createServer(servePage);
server.listen(8080);
console.log('Server running at http://localhost:8080');
