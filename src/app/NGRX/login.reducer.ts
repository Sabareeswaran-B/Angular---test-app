import { createReducer, on } from "@ngrx/store";
import { User } from "../_models/user";
import { login } from "./login.action";

export const initialState = new User();

const _LoginReducer = createReducer(
    initialState,
    on(login, (state: User) => state)
);

export function LoginReducer(state: any, login: any) {
    return _LoginReducer(login, login)
}