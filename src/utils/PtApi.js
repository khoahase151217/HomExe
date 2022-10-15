const { get } = require('./apiCaller');

const PtApi = {
    getAll: () => {
        const url = '/api/pt';
        return get(url);
    },
    getPtById: (id = '') => {
        const url = `/api/pt/detail`;
        return get(url, { ptId: id });
    },
};

export default PtApi;
