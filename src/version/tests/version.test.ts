import request from 'supertest';
import Package from '../../../package.json';
import app from '../../app.js';

describe('Version API', () => {
  test('Should return version', async () => {
    const { status, text } = await request(app).get('/');
    expect(status).toBe(200);
    expect(text).toBe(Package.version);
  });
});
