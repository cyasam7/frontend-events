type LocalStorageValues = 'TOKEN';

export const setItem = (
	path: LocalStorageValues,
	data: string | object
): void => {
	if (typeof data === 'object') {
		data = JSON.stringify(data);
	}
	localStorage.setItem(path, data);
};
export const getItem = (path: LocalStorageValues): string | null => {
	return localStorage.getItem(path);
};
export const deleteItem = (path: LocalStorageValues): void => {
	localStorage.removeItem(path);
};
