import { IBan } from './';

export interface UpdateUserDto {
    nickname?: string;
    email?: string;
    ban?: IBan | 'unban';
    roles?: string[];
}
