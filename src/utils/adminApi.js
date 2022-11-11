const { get, post, put } = require('./apiCaller');

const adminApi = {
    getContractForAdmin: () => {
        const url = '/api/contract/admin';
        return get(url);
    },
    getCategory: () => {
        const url = '/api/pt/category';
        return get(url);
    },
    createPt: (data) => {
        const url = `/api/pt`;
        return post(url, data);
    },
    confirmContract: (contractId = '') => {
        const url = `/api/contract/${contractId}`;
        return put(url);
    },

};

export default adminApi;
