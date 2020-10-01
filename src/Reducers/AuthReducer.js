// import * as ActionTypes from '../actions/type';

const initialState={
    user_id:''
}

const AuthReducer=(state = initialState, action)=>{
    const newState={...state};
    switch(action.type){
        case ActionTypes.LOGIN : newState.user_id = action.payload;
        break;
    } 
    return newState;
 
}

export default AuthReducer;

