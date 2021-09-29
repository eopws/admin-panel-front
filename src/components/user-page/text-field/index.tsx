import React, { FC } from 'react';
import { TextField as Input } from '@material-ui/core';
import styles from './text-field.module.scss';

interface TextFieldProps {
    className?: string;
    label: string;
    value: string;
    placeholder?: string;
    onChange: (newValue: string) => void;
}

const TextField: FC<TextFieldProps> = ({className = '', label, value, placeholder = '', onChange}) => {
    return (
        <div className={`${className} ${styles.userInfoItem}`}>
            <span className={styles.userInfoItem__entity}>{label}:</span>
            <span className={styles.userInfoItem__entity}>
                <Input
                    size="small"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                />
            </span>
        </div>
    );
}

export default TextField
