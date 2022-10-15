const { get } = require('./apiCaller');

const PtApi = {
  getAll: () => {
    const url = '/api/pt';
    return get(url);
  },
  getPtById: (id = '') => {
    const url = `/api/pt/user`;
    return get(url, {userId: id});
  },
  
};

export default PtApi;