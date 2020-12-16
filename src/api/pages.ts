export const getPages = () => {
	return fetch(
		'https://pagesmanagement.azurewebsites.net/api/ResponsivePages'
	).then((data) => data.json());
};

export const deletePage = (pageId: number) => {
	return fetch(
		`https://pagesmanagement.azurewebsites.net/api/ResponsivePages/${pageId}`,
		{
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	).then((data) => data.json());
};

export const getPage = (page: any) => {
	return fetch(
		`https://pagesmanagement.azurewebsites.net/api/ResponsivePages/${page.id}`
	).then((data) => data.json());
};

export const createPage = (page: any) => {
	return fetch(
		`https://pagesmanagement.azurewebsites.net/api/ResponsivePages`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(page),
		}
	).then((data) => data.json());
};

export const updatePage = (page: any) => {
	console.log('updatePage', page);
	return fetch(
		`https://pagesmanagement.azurewebsites.net/api/ResponsivePages/${page.id}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(page),
		}
	).then((data) => data);
};
