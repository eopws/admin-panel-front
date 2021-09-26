import React, { FC } from 'react';
import { Button, TextField } from '@material-ui/core';
import styles from './auth-page.module.scss';

const AuthPage: FC = () => {
    return (
        <div className={styles.authForm}>
            <h1 className={styles.authForm__header}>Авторизация</h1>

            <div className={styles.authForm__body}>
                <TextField
                    classes={{ root: styles.textField }}
                    placeholder="почта"
                    size="small"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    classes={{ root: styles.textField }}
                    placeholder="пароль"
                    size="small"
                    variant="outlined"
                    fullWidth
                />

                <Button
                    variant="contained"
                >
                    Войти
                </Button>
            </div>
        </div>
    )
}

export default AuthPage
