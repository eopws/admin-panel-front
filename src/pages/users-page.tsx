import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {default as CheckIcon} from '@material-ui/icons/Check';
import {default as CrossIcon} from '@material-ui/icons/Clear';
import styles from './users-page.module.scss';

const UsersPage = () => {
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
                        <TableRow classes={{root: styles.userRow}}>
                            <TableCell>1</TableCell>
                            <TableCell>tester@gmail.com</TableCell>
                            <TableCell>vasya</TableCell>
                            <TableCell><CrossIcon /></TableCell>
                            <TableCell>admin</TableCell>
                        </TableRow>

                        <TableRow classes={{root: styles.userRow}}>
                            <TableCell>2</TableCell>
                            <TableCell>pochta@gmail.com</TableCell>
                            <TableCell>petya</TableCell>
                            <TableCell><CheckIcon /></TableCell>
                            <TableCell>user</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default UsersPage
