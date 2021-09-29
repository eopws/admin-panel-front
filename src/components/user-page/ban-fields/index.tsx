import React, { FC } from 'react';
import { TextField, Checkbox } from '..';
import { IBan } from '../../../models';

interface BanFieldsProps {
    ban: IBan;
    onChange: (newBanValue: IBan) => void;
}

const BanFields: FC<BanFieldsProps> = ({ ban, onChange }) => {
    return (
        <div>
            <Checkbox
                label="забанен"
                value={ban.lockStatus === '1'}
                onChange={(newValue) => onChange({...ban, lockStatus: (newValue ? '1' : '0')})}
            />

            {
                ban.lockStatus === '1' &&
                <>
                    <TextField
                        label="забанен с"
                        value={ban.tmp_from}
                        onChange={(newValue) => onChange({...ban, tmp_from: newValue})}
                    />

                    <TextField
                        label="забанен до"
                        value={ban.tmp_to}
                        onChange={(newValue) => onChange({...ban, tmp_to: newValue})}
                    />

                    <TextField
                        label="забанен по причине"
                        value={ban.reason}
                        onChange={(newValue) => onChange({...ban, reason: newValue})}
                    />
                </>
            }
        </div>
    )
}

export default BanFields
