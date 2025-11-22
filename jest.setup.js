// jest.setup.js
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ mock: 'data' }),
  })
);
