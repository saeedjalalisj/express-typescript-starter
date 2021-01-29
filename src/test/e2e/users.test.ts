import supertest from 'supertest';
import Express from '../../providers/express';
const app = Express.init();
const request = supertest(app);

describe('', () => {
    test('should call users api', async (done) => {
        const res = await request.get('/users');
        expect(res.status).toBe(200)
        done();
    });
})
