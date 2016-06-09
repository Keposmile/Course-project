function start(response){
  console.log("Request handler 'start' was called.");
  var body = '<html>'+
    '<head>'+
      '<meta http-equiv="content-type" content="text/html" charset="utf-8" />'+
    '</head>'+
    '<body>'+
      '<form action="/upload" method="post">'+
        '<textarea name="name" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text">'+
      '</form>'+
    '</body>'+
  '</html>';

  response.writeHead(200,{"Content-Type":"text/html"});
  response.write(body);
  response.end();
}

function upload(response){
  console.log("Request handler 'upload' was called.");
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write("Hello upload!");
  response.end();
}

exports.start = start;
exports.upload = upload;
