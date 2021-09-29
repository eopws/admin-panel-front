import React, { FC, useCallback, useEffect, useState } from 'react';
import { match } from 'react-router';
import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styles from './user-page.module.scss';
import { Link } from 'react-router-dom';
import { UsersService } from '../http';
import { IUser, IBan } from '../models';
import { TextField, BanFields } from '../components/user-page';

interface UserPageProps {
    match: match<{userId: string}>
}

interface InputsState {
    nickname: string;
    email: string;
    ban: IBan;
    roles: string;
}

const UserPage: FC<UserPageProps> = ({ match }) => {
    const [user, setUser] = useState<IUser>();
    const [inputs, setInputs] = useState<InputsState>({
        nickname: '',
        email: '',
        ban: {
            lockStatus: '0',
            tmp_to: '',
            tmp_from: '',
            reason: ''
        },
        roles: ''
    });

    useEffect(() => {
        UsersService.getOne(match.params.userId)
            .then((response) => {
                setUser(response.data);
            })
    }, []);

    useEffect(() => {
        if (user) {
            const defaultBanValue: IBan = {
                lockStatus: '0',
                tmp_to: '',
                tmp_from: '',
                reason: ''
            };

            const ban = user.ban || defaultBanValue;

            let roles = '';

            if (user.role) {
                roles = user.role.reduce<string>((prev, current): string => {
                    return `${prev} ${current.idGroup},`
                }, '');

                roles = roles.trim();
                roles = roles.substring(0, roles.length - 1);
            }

            setInputs({
                ...inputs,
                nickname: user.nickname,
                email: user.email,
                ban,
                roles,
            });
        }
    }, [user]);

    const onUpdate = useCallback(async () => {
        if (user) {
            const ban = inputs.ban.lockStatus === '0' ? 'unban' : Object.assign(inputs.ban, {user: user.id})

            let roles = inputs.roles.split(', ');

            roles = roles[0] === '' ? [] : roles;

            await UsersService.updateOne(user.id, {...inputs, ban, roles });
        }
    }, [user, inputs]);

    return (
        <div>
            <h1 className="pageHeader">Пользователь {user?.nickname}</h1>

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
                            <span className={styles.userInfoItem__entity}>{user?.id}</span>
                        </div>

                        <TextField
                            className={styles.userInfo__item}
                            label="имя"
                            value={inputs.nickname}
                            onChange={(newValue) => setInputs({...inputs, nickname: newValue})}
                        />

                        <TextField
                            className={styles.userInfo__item}
                            label="почта"
                            value={inputs.email}
                            onChange={(newValue) => setInputs({...inputs, email: newValue})}
                        />

                        <BanFields
                            ban={inputs.ban}
                            onChange={(newBan) => setInputs({...inputs, ban: newBan})}
                        />

                        <TextField
                            className={styles.userInfo__item}
                            label="роли"
                            value={inputs.roles}
                            onChange={(newValue) => setInputs({...inputs, roles: newValue})}
                        />
                    </div>

                    <Button
                        classes={{ root: styles.updateUserBtn }}
                        variant="contained"
                        onClick={onUpdate}
                    >
                        Обновить пользователя
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UserPage
