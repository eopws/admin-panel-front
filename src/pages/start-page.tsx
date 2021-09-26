import React, { FC } from 'react';
import Group from '@material-ui/icons/Group';
import styles from './start-page.module.scss';

const StartPage: FC = () => {
    return (
        <div>
            <h1 className="pageHeader">Панель администратора</h1>

            <div className="container">
                <div className="pageBody">
                    <span className={styles.entitiesList__item}>
                        <Group classes={{root: styles.entitiesList__icon}} />
                        Пользователи
                    </span>
                </div>
            </div>
        </div>
    );
};

export default StartPage
