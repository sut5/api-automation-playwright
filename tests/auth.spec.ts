import { test, expect } from '@playwright/test';

test('POST - Login Success returns token', async ({ request }) => {
  const response = await request.post('/api/login', {
    data: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    },
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty('token');
  expect(responseBody.token).toBeTruthy();
});

test('POST - Login Missing Password returns 400 with error message', async ({ request }) => {
  const response = await request.post('/api/login', {
    data: {
      email: 'eve.holt@reqres.in',
    },
  });

  expect(response.status()).toBe(400);

  const responseBody = await response.json();

  expect(responseBody).toEqual({
    error: 'Missing password',
  });
});