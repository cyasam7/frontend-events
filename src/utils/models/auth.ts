export interface IUser {
	id: string;
	name: string;
	lastName: string;
	email: string;
	role: string;
	phone: string;
	profilePhoto: string;
}

export interface ILoginResponse {
	user: IUser;
	accessToken: string;
	refreshToken: string;
}

export interface ICheckUserResponse {
	user: IUser;
}
