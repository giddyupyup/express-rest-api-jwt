import request from 'supertest';
import authRoute from './auth';
import express, { json, urlencoded } from 'express';
import * as findOneUser from '../data/users/findOneUser';
import bcrypt from 'bcrypt';

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());
app.use('/', authRoute);

describe('auth routes', () => {
  describe('middleware verification', () => {
    it('should verify user for empty body on signUp request', async () => {
      const response = await request(app).post('/signup').send({});

      expect(response.status).toStrictEqual(400);
      expect(response.body).toStrictEqual({
        error: 'Request body is missing!',
      });
    });

    it('should verify user for empty body on signIn request', async () => {
      const response = await request(app).post('/signin').send({});

      expect(response.status).toStrictEqual(400);
      expect(response.body).toStrictEqual({
        error: 'Request body is missing!',
      });
    });

    it('should verify user for missing userName on signUp request', async () => {
      const response = await request(app)
        .post('/signup')
        .send({ password: 'test-password' });

      expect(response.status).toStrictEqual(400);
      expect(response.body).toStrictEqual({
        error: 'Missing userName and password in request body',
      });
    });

    it('should verify user for missing userName on signIn request', async () => {
      const response = await request(app)
        .post('/signin')
        .send({ password: 'test-password' });

      expect(response.status).toStrictEqual(400);
      expect(response.body).toStrictEqual({
        error: 'Missing userName and password in request body',
      });
    });

    it('should verify user already exists on signUp request', async () => {
      jest.spyOn(findOneUser, 'findOneUser').mockReturnValue({
        id: 'test-id',
        userName: 'test-userName',
        password: 'test-password',
      });

      const response = await request(app)
        .post('/signup')
        .send({ password: 'test-password', userName: 'test-userName' });

      expect(response.status).toStrictEqual(409);
      expect(response.body).toStrictEqual({
        error: 'User already exists!',
      });
    });

    it('shoult verify user if user does not exists on signIn request', async () => {
      jest.spyOn(findOneUser, 'findOneUser').mockReturnValue(undefined);

      const response = await request(app)
        .post('/signin')
        .send({ userName: 'test-userName', password: 'test-password' });

      expect(response.status).toStrictEqual(404);
      expect(response.body).toStrictEqual({
        error: 'User does not exists',
      });
    });

    it('should verify user for incorrect userName and password', async () => {
      jest.spyOn(findOneUser, 'findOneUser').mockReturnValue({
        id: 'test-id',
        userName: 'test-userName',
        password: 'test-password',
      });

      jest.spyOn(bcrypt, 'compareSync').mockReturnValue(false);

      const response = await request(app)
        .post('/signin')
        .send({ userName: 'test-userName', password: 'test-password' });

      expect(response.status).toStrictEqual(400);
      expect(response.body).toStrictEqual({
        error: 'Incorrect userName and password',
      });
    });
  });
});
