import $api from './axios';
import { IUser, UpdateUserDto } from '../models';

class UsersService {
    static async getAll() {
        return $api.get<IUser[]>('user');
    }

    static getOne(id: string) {
        return $api.get<IUser>('user/' + id);
    }

    static updateOne(id: number, update: UpdateUserDto) {
        return $api.put('user/' + id, update);
    }
}

export default UsersService
