const { get, put } = require('./apiCaller');

const contractApi = {
 
  getContractByUserId: (id = '') => {
    const url = `/api/contract/user?userId=${id}`;
    return get(url);
  },
  updateStatusPaymentContract: (id= '')=>{
    const url = `/api/contract/user?userId=${id}`;
    return put(url);
  }
  
};

export default contractApi;