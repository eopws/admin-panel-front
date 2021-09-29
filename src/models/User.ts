import { IBan } from ".";

export default interface IUser {
    id: number;
    nickname: string;
    email: string;
    ban?: IBan;
    role?: any[];
}
