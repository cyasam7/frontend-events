import { IPagination } from '../../@types';

export interface IBusiness {
	_id: string;
	name: string;
	image: string;
}

export type IGetByQueryBusiness = IPagination<IBusiness>;
