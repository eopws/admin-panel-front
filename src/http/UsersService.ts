import $api from './axios';
import { IUser } from '../models';

class UsersService {
    static async getAll() {
        return $api.get<IUser[]>('user');
    }
}

export default UsersService
