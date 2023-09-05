export const environment = {
  production: true,
  auth0: {
    domain: 'dev-isoft.us.auth0.com',
    clientId: 'oJQrQVZ7VRWmXPn4TRUuic3XLQWgznUm',
    audience: '',
    authorizationParams: {
      redirect_uri: 'http://localhost:4040',
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: '',
  },
};
