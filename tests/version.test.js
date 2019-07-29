import 'core-js/stable';
import 'regenerator-runtime/runtime';
import request from 'supertest';
import '../lib/loadenv';
import app from '../lib/app';
import packageDotJson from '../package';

const { version: versionTest } = packageDotJson;

describe('Version API', () => {
  test('Should return version', async () => {
    const { statusCode, text } = await request(app).get('/');
    expect(statusCode).toBe(200);
    expect(text).toBe(versionTest);
  });
});
