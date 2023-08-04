import { IUser } from '../../utils/models/auth';

export interface IAuthState {
	user: IUser | null;
	auth: boolean;
	loading: boolean;
}
