import { StartPage, AuthPage, UserPage, UsersPage } from '../pages/';

interface IRoute {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/',
    USERS = '/users',
    USER  = '/user/:userId?',
    HOME  = '/'
}

export const unauthorizedRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: AuthPage}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, component: StartPage},
    {path: RouteNames.USERS, exact: true, component: UsersPage},
    {path: RouteNames.USER, exact: false, component: UserPage},
]
