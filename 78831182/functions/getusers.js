exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: 'Hello',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, x-Requested-With, Content-Type,Accept',
    },
  });
};
