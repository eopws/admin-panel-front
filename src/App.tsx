import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StartPage, AuthPage, UserPage, UsersPage } from './pages/';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={AuthPage} exact />
            <Route path="/home" component={StartPage} exact />
            <Route path="/users" component={UsersPage} exact />
            <Route path="/user/:userId?" component={UserPage} exact />
        </BrowserRouter>
    );
};

export default App;
