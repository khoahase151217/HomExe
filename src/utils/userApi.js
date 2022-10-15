const { get, post } = require('./apiCaller');

const userApi = {
  getUserId: (id = '') => {
    const url = `/api/user/${id}`;
    return get(url);
  },
  login: (username = '', password = '')=>{
    const url = `/api/user/login`;
    return post(url, {userName: username, password});
  }
  
};

export default userApi;