export interface IUser {
  id: number;
  firstName: string;
  secondName: string;
  userName: string;
  email: string;
  password: string;
  posts: IPost[];
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  userId: number;
}

export interface IGenericResponse {
  status: string;
  message: string;
}
