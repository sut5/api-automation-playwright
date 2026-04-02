import { test, expect } from '@playwright/test';

test('GET - List Users returns page 2 with users', async ({ request }) => {
  const response = await request.get('/api/users?page=2');

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.page).toBe(2);
  expect(Array.isArray(responseBody.data)).toBeTruthy();
  expect(responseBody.data.length).toBeGreaterThan(0);

  for (const user of responseBody.data) {
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('first_name');
    expect(user).toHaveProperty('last_name');
    expect(user).toHaveProperty('avatar');
  }
});

test('GET - Single User returns user with id 2', async ({ request }) => {
  const response = await request.get('/api/users/2');

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.data.id).toBe(2);
  expect(responseBody.data).toHaveProperty('id');
  expect(responseBody.data).toHaveProperty('email');
  expect(responseBody.data).toHaveProperty('first_name');
  expect(responseBody.data).toHaveProperty('last_name');
  expect(responseBody.data).toHaveProperty('avatar');
});

test('GET - Single User Not Found returns 404 with empty object', async ({ request }) => {
  const response = await request.get('/api/users/999');

  expect(response.status()).toBe(404);

  const responseBody = await response.json();

  expect(responseBody).toEqual({});
});