import { AuthService } from '../../../http/';
import { AppDispatch } from '../../';
import { AuthActionEnum, SetIsAuthAction } from './types';

export const AuthActionCreators = {
    setIsAuth: (auth: boolean): SetIsAuthAction => ({type: AuthActionEnum.SET_IS_AUTH, payload: auth}),

    login: (email: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            await AuthService.login({email, password});

            dispatch(AuthActionCreators.setIsAuth(true));
        } catch (e: unknown) {
            console.log(e);
        }
    }
};
