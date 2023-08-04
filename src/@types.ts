export interface IPagination<Response> {
	docs: Response[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	pagingCounter: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage?: any;
	nextPage: number;
}
