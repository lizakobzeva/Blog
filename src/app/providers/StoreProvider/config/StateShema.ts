import { CounterShema } from "entities/Counter";
import { PostsShema } from "entities/Post/model/types/PostTypes";
import { UserShema } from "entities/User";
import { LoginShema } from "features/AuthByEmail/model/types/LoginShema";
import { RegisterShema } from "features/AuthByEmail/model/types/RegisterShema";

export interface StateShema {
  counter: CounterShema;
  user: UserShema;
  login: LoginShema;
  register: RegisterShema;
  posts: PostsShema;
}
