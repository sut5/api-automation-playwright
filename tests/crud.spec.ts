import { test, expect } from '@playwright/test';

test('POST - Create User returns created user data', async ({ request }) => {
  const response = await request.post('/api/users', {
    data: {
      name: 'morpheus',
      job: 'leader',
    },
  });

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  expect(responseBody.name).toBe('morpheus');
  expect(responseBody.job).toBe('leader');
  expect(responseBody).toHaveProperty('id');
  expect(responseBody.id).toBeTruthy();
  expect(responseBody).toHaveProperty('createdAt');
  expect(responseBody.createdAt).toBeTruthy();
});