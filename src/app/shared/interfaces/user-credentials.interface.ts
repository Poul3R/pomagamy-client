export class UserCredentialsInterface {
  _id: string;
  email: string;
  auth: {
    token: string,
    refresh_token: string
  };
  role: string;
}
