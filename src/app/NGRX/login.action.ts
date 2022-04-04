import { createAction, props } from "@ngrx/store";

export const login = createAction('[Login] Login',
    props<{
        id: number;
        userName: string;
        userRole: string;
        token: string;
        phoneNo: string;
    }>()
);