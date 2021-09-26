import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StartPage } from './pages/';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={StartPage} exact />
        </BrowserRouter>
    );
};

export default App;
