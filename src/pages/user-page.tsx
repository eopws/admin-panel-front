import React, { FC } from 'react';
import { match } from 'react-router';
import { Button, TextField } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styles from './user-page.module.scss';
import { Link } from 'react-router-dom';

interface UserPageProps {
    match: match<{userId: string}>
}

const UserPage: FC<UserPageProps> = ({ match }) => {
    return (
        <div>
            <h1 className="pageHeader">Пользователь {match.params.userId}</h1>

            <div className="container">
                <div className="pageBody">
                    <Link to="/users">
                        <span className={styles.backBtn}>
                                <ArrowBackIosIcon /> Обратно
                        </span>
                    </Link>

                    <div className={styles.userInfo}>
                        <h2 className={styles.userInfo__header}>Редактировать пользователя:</h2>

                        <div className={`${styles.userInfo__item} ${styles.userInfoItem}`}>
                            <span className={styles.userInfoItem__entity}>id:</span>
                            <span className={styles.userInfoItem__entity}>{match.params.userId}</span>
                        </div>

                        <div className={`${styles.userInfo__item} ${styles.userInfoItem}`}>
                            <span className={styles.userInfoItem__entity}>почта:</span>
                            <span className={styles.userInfoItem__entity}>
                                <TextField size="small" defaultValue="tester@gmail.com" />
                            </span>
                        </div>
                    </div>

                    <Button
                        classes={{ root: styles.updateUserBtn }}
                        variant="contained"
                    >
                        Обновить пользователя
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UserPage
