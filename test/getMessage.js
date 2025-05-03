// getMessage.js
exports.handler = async (event) => {
    if (event.pathParameters?.id === 'text') {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello from AWS Lambda!' })
      };
    }
  
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Message not found' })
    };
  };
  