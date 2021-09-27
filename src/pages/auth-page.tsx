import React, { FC, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import styles from './auth-page.module.scss';
import { useActions } from '../hooks/useActions';

const AuthPage: FC = () => {
    const reduxActions   = useActions();

    const [email, setEmail]       = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onLogin = async () => {
        reduxActions.login(email, password);
    };

    return (
        <div className={styles.authForm}>
            <h1 className={styles.authForm__header}>Авторизация</h1>

            <div className={styles.authForm__body}>
                <TextField
                    classes={{ root: styles.textField }}
                    placeholder="почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="small"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    classes={{ root: styles.textField }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="пароль"
                    size="small"
                    variant="outlined"
                    fullWidth
                />

                <Button
                    variant="contained"
                    onClick={onLogin}
                >
                    Войти
                </Button>
            </div>
        </div>
    )
}

export default AuthPage
