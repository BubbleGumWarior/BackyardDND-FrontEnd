export class UserModel {
  get userName(): string {
    return <string>this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get email(): string {
    return <string>this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return <string>this._password;
  }

  set password(value: string) {
    this._password = value;
  }
  constructor(userName: string, email: string, password: string) {
    this._userName = userName;
    this._email = email;
    this._password = password;
  }
  private _userName?: string;
  private _email?: string;
  private _password?: string;
}
