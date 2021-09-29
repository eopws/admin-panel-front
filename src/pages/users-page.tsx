import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {default as CheckIcon} from '@material-ui/icons/Check';
import {default as CrossIcon} from '@material-ui/icons/Clear';
import styles from './users-page.module.scss';
import { UsersService } from '../http';
import { IUser } from '../models';

const UsersPage = () => {
    const history = useHistory();
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        UsersService.getAll()
            .then((response) => {
                setUsers(response.data);
            });
    }, []);

    const getRolesAsText = (numberedRoles: {id: number, idGroup: string}[]) => {
        const rolesNumbersToWords: { readonly [key: string]: string } = {
            '1': 'администратор',
            '2': 'пользователь'
        };

        let rolesText: string = numberedRoles.reduce<string>((prev, current): string => {
            const idGroup = current.idGroup;
            return `${prev} ${rolesNumbersToWords[idGroup]}, `;
        }, '');

        rolesText = rolesText.substring(0, rolesText.length - 2);

        return rolesText;
    };

    const onTableRowClick = (userId: number) => {
        history.push('user/' + userId);
    };

    return (
        <div>
            <h1 className="pageHeader">Пользователи</h1>

            <div className="pageBody container">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>email</TableCell>
                            <TableCell>имя</TableCell>
                            <TableCell>забанен</TableCell>
                            <TableCell>роли</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) =>
                            <TableRow
                                key={user.id}
                                classes={{root: styles.userRow}}
                                onClick={() => onTableRowClick(user.id)}
                            >
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.nickname}</TableCell>
                                    <TableCell>
                                        {user.ban
                                            ?
                                            <CheckIcon />
                                            :
                                            <CrossIcon />
                                        }
                                    </TableCell>
                                    <TableCell>{user.role && getRolesAsText(user.role)}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default UsersPage
