const { get } = require('./apiCaller');

const PtApi = {
  getAll: () => {
    const url = '/api/pt';
    return get(url);
  },
  getPtById: (id = '') => {
    const url = `/api/pt/user/?userId=${id}`;
    return get(url);
  },
  
};

export default PtApi;