interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '376ibb34eIcYWTJ8VefGwPbaXxfDFy31',
  domain: 'duninvit.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  apiUrl: 'https://duninvit.com/ConspectSite/'
};
