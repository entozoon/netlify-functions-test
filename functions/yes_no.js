exports.handler = function(event, context, callback) {
  const {yes = 'yes', no = 'no'} = event.queryStringParameters;
  callback(null, {
    statusCode: 200,
    body: Math.floor(Math.random() * 2) ? yes : no,
  });
};
