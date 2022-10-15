const { get } = require('./apiCaller');

const userApi = {
  getUserId: (id = '') => {
    const url = `/api/user/${id}`;
    return get(url);
  },
  
};

export default userApi;