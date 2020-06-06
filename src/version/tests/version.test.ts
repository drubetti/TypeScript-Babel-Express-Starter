import { version } from '../../../package.json';
import request from 'supertest';
import app from '../../app';

describe('Version API', () => {
  test('Should return version', async () => {
    const { status, text } = await request(app).get('/');
    expect(status).toBe(200);
    expect(text).toBe(version);
  });
});
