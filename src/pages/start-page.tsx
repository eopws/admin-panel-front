import React, { FC } from 'react';
import Group from '@material-ui/icons/Group';
import styles from './start-page.module.scss';
import { Link } from 'react-router-dom';

const StartPage: FC = () => {
    return (
        <div>
            <h1 className="pageHeader">Панель администратора</h1>

            <div className="container">
                <div className="pageBody">
                    <Link to="users">
                        <span className={styles.entitiesList__item}>
                            <Group classes={{root: styles.entitiesList__icon}} />
                            Пользователи
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StartPage
