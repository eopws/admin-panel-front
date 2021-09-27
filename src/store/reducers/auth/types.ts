export interface AuthState {
    isAuth: boolean
}

export enum AuthActionEnum {
    SET_IS_AUTH = 'SET_IS_AUTH'
}

export interface SetIsAuthAction {
    type: AuthActionEnum.SET_IS_AUTH
    payload: boolean
}

export type AuthAction = SetIsAuthAction
