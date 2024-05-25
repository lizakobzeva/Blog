export interface User {
  id: string;
  name: string;
  likedPosts: Array<string>;
}
export interface UserShema {
  authData?: User;
}
