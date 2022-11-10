const { get, put, post } = require('./apiCaller');

const contractApi = {
    getContractByUserId: (id = '') => {
        const url = `/api/contract/user`;
        return get(url, { userId: IDBCursorWithValue });
    },
    updateStatusPaymentContract: (id = '') => {
        const url = `/api/contract/user`;
        return put(url, {}, { userId: id });
    },
    postRecipe: (
        recipeDTO = {
            recipeId: 0,
            pictures: 'string',
            recipe: 'string',
            categoryId: 0,
        }
    ) => {
        const url = '/api/recipe';
        return post(url, recipeDTO, {});
    },
    postContract: (
        contractDTO = {
            userId: 0,
            ptId: 0,
            createdDate: '',
            endDate: '',
            schedule: 0,
        }
    ) => {
        const url = '/api/contract';
        return post(url, contractDTO);
    },
};

export default contractApi;
