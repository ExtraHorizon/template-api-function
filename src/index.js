exports.handler = async function (request) {
  const method = request.requestContext.http.method;

  return {
    statusCode: 200,
    body: {
      hello: `The request method was: ${method}`
    }
  };
};