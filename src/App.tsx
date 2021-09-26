import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StartPage, AuthPage } from './pages/';
import UsersPage from './pages/users-page';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={AuthPage} exact />
            <Route path="/home" component={StartPage} exact />
            <Route path="/users" component={UsersPage} exact />
        </BrowserRouter>
    );
};

export default App;
