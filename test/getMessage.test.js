// getMessage.test.js
const { handler } = require('./getMessage');

test('returns message for id "text"', async () => {
  const event = {
    pathParameters: { id: 'text' }
  };

  const result = await handler(event);
  expect(result.statusCode).toBe(200);
  expect(JSON.parse(result.body)).toEqual({ message: 'Hello from AWS Lambda!' });
});

test('returns 404 for unknown id', async () => {
  const event = {
    pathParameters: { id: 'unknown' }
  };

  const result = await handler(event);
  expect(result.statusCode).toBe(404);
  expect(JSON.parse(result.body)).toEqual({ error: 'Message not found' });
});
