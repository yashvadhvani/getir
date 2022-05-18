const app = require('../app');
const { connectToServer, close } = require('../lib/connection');
const supertest = require('supertest');

beforeEach((done) => {
  connectToServer((err) => {
    if (err) {
      console.error(err);
      process.exit();
    }
    done();
  });
});

afterEach((done) => {
  close();
  done();
});

test('POST /records', async () => {
  await supertest(app)
    .post('/records')
    .send({
      startDate: '2016-01-26',
      endDate: '2018-02-02',
      minCount: 2700,
      maxCount: 3000,
    })
    .expect(200)
    .then((response) => {
      // Check type and length
      expect(response.body.code).toBe(0);
      expect(response.body.msg).toBe('Success');
      expect(Array.isArray(response.body.records)).toBeTruthy();
      expect(response.body.records.length).toBeGreaterThan(0);
    });
});
