const { get, post } = require('./apiCaller');

const scheduleApi = {
  getUserSchedule: (id = '') => {
    const url = `/api/schedule/user/${id}`;
    return get(url);
  },
  getPtSchedule: (id = '') => {
    const url = `/api/schedule/pt/${id}`;
    return get(url);
  }
  
};

export default scheduleApi;