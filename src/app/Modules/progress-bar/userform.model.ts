export class progressForm{
    public email: string;
    public username: string;
    public password: string;
    public  keys: any;
    constructor(
      email: string,
      username: string,
      password: string,
    ) {
      this.email = email;
      this.username = username;
      this.password = password;
    }
}