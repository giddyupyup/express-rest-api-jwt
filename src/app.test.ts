import request from 'supertest';
import app from './app';

describe('app route', () => {
  it('should return api route not found', async () => {
    const response = await request(app).get('/');

    expect(response.status).toStrictEqual(404);
    expect(response.body).toStrictEqual({ error: 'API route not found' });
  });
});
