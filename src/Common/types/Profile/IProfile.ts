export interface IProfile {
  infoProfile: {
    token: null | string;
    user: IUser;
  };
}

export interface IUser {
  email: null | string;
  name: null | string;
  image: null | string;
}

export interface IUpdateUser {
  name: string;
  email: string;
}
export interface IUpdatePassword {
  oldPassword: string;
  newPassword: string;
}
