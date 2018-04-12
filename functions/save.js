const fs = require("fs");

exports.handler = function(event, context, callback) {
  if (fs.existsSync("/saved.txt")) {
    var data = fs.readFileSync("/saved.txt");
    console.log(data.toString());
    callback(null, {
      statusCode: 200,
      body: data.toString()
    });
  }

  fs.writeFile("/saved.txt", "testing: " + Math.random(), function(err) {
    if (err) {
      context.fail("writeFile failed: " + err);
    } else {
      context.succeed("writeFile succeeded");
    }
  });
};
