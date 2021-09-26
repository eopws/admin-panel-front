import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StartPage, AuthPage } from './pages/';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={AuthPage} exact />
            <Route path="/home" component={StartPage} exact />
        </BrowserRouter>
    );
};

export default App;
