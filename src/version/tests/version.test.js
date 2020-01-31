import request from 'supertest';
import '../../utils/loadenv';
import app from '../../app';
import packageDotJson from '../../../package';

const { version: versionTest } = packageDotJson;

describe('Version API', () => {
  test('Should return version', async () => {
    const { statusCode, text } = await request(app).get('/');
    expect(statusCode).toBe(200);
    expect(text).toBe(versionTest);
  });
});
