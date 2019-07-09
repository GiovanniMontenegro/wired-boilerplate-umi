export interface IUser {
  id: string;
  username: string;
  name?: string;
  surname?: string;
  image?: string;
  bio?: string;
  role: string;
  access: IUserAccess;
}

export interface IUserAccess {
  login: string;
  logout: string;
}

export default class User {
  private user: IUser;
  constructor(user: IUser) {
    this.user = user;
  }
  isAuthenticated() {
    return this.user.access.login !== '0' && this.user.id !== '' && this.user.username !== '';
  }
}
