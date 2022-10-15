const { get } = require('./apiCaller');

const contractApi = {
  getAll: () => {
    const url = '/api/pt';
    return get(url);
  },
  get: (id = '') => {
    const url = `/api/pt/user/?userId=${id}`;
    return get(url);
  },
  
};

export default contractApi;