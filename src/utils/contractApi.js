const { get, put, post } = require('./apiCaller');

const contractApi = {
 
  getContractByUserId: (id = '') => {
    const url = `/api/contract/user`;
    return get(url, {userId: IDBCursorWithValue});
  },
  updateStatusPaymentContract: (id= '')=>{
    const url = `/api/contract/user`;
    return put(url, {} , {userId: id});
  },
  postRecipe: (recipeDTO = {
    "recipeId": 0,
    "pictures": "string",
    "recipe": "string",
    "categoryId": 0
  }) =>{
    const url ='/api/recipe';
    return post(url, recipeDTO, {}, ) 
  }
};

export default contractApi;