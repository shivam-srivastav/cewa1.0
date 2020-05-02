
  //---------------------------------------------------//

  import { ADD_ARTICLE,ADD_CLICK, ADD_REG } from "../constants/action-types";

  const initialState = {
    articles: [],
    click: null,
    name:"",
    classs:"",
    email:"",
    password:""
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      })
    }
    if(action.type === ADD_CLICK){
      return Object.assign({},state,{
        click: state.click+1
      })
    }
    if(action.type === ADD_REG){
      return Object.assign({},state,{name:action.payload.name},{classs:action.payload.classs},{email:action.payload.email}
        
      )
    }
    return state;
  }
  
  export default rootReducer;