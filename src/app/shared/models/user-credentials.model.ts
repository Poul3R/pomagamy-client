export class UserCredentialsModel {

  constructor(public id: string,
              public email: string,
              private _token: string,
              private _refreshToken: string,
              public expireDate: Date,
              public role: string) {
  }

  get token() {
    if (!this.expireDate || new Date() > this.expireDate) {
      return null;
    }
    return this._token;
  }

  get refreshToken() {
    if (!this._refreshToken) {
      return null;
    }
    return this._refreshToken;
  }
}
