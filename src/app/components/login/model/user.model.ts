export class UserModel {
  public userName?: string;
  public email?: string;
  public password?: string;
  constructor(userName: string, email: string, password: string) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  getUserName(): string {
    return <string>this.userName;
  }
  getEmail(): string {
    return <string>this.email;
  }
  getPassword(): string {
    return <string>this.password;
  }
}
