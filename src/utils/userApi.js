const { get, post } = require('./apiCaller');

const userApi = {
    getUserId: (id = '') => {
        const url = `/api/user/${id}`;
        return get(url);
    },
    login: (data) => {
        const url = `/api/user/login`;
        return post(url, data);
    },
};

export default userApi;
