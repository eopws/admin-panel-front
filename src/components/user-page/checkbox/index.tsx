import React, { FC } from 'react';
import { Checkbox as InputCheckbox } from '@material-ui/core';
import styles from './checkbox.module.scss';

interface CheckboxProps {
    className?: string;
    label: string;
    value: boolean;
    onChange: (newValue: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({className = '', label, value, onChange}) => {
    return (
        <div className={`${className} ${styles.userInfoItem}`}>
            <span className={styles.userInfoItem__entity}>{label}:</span>
            <span className={styles.userInfoItem__entity}>
                <InputCheckbox
                    checked={value}
                    onChange={(e) => onChange(e.target.checked)}
                />
            </span>
        </div>
    )
}

export default Checkbox
