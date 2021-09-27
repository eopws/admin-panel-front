import React, { FC, useEffect } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { unauthorizedRoutes, privateRoutes } from './router/';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';

const App: FC = () => {
    const reduxActions   = useActions();
    const { isAuth }     = useTypedSelector(state => state.auth);

    useEffect(() => {
        if (document.cookie.indexOf('connect.sid') !== -1) {
            reduxActions.setIsAuth(true);
        }
    }, []);

    return (
        <BrowserRouter>
            {!isAuth
                ?
                unauthorizedRoutes.map((route) =>
                    <Route path={route.path} component={route.component} exact={route.exact} />
                )
                :
                privateRoutes.map((route) =>
                    <Route path={route.path} component={route.component} exact={route.exact} />
                )
            }
            <Redirect to="/" />
        </BrowserRouter>
    );
};

export default App;
