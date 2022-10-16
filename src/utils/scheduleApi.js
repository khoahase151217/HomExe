const { get, post } = require('./apiCaller');

const scheduleApi = {
  getUserSchedule: (id = '') => {
    const url = `/api/schedule/user/${id}`;
    return get(url);
  }
  
};

export default scheduleApi;