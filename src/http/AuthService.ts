import { LoginDto } from '../models';
import $api from './axios';

class AuthService {
    static async login(loginDto: LoginDto) {
        return $api.post('auth/login', loginDto);
    }
}

export default AuthService
