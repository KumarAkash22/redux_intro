import {ADD_TODO, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, REMOVE_TODO,GET_TODO_LOADING,GET_TODO_SUCCESS,GET_TODO_ERROR} from './actionType'
export const addTodo = (data)=>({
    type:ADD_TODO,
    payload: data,
})
export const addTodoLoading =()=>{
    return {
        type : ADD_TODO_LOADING,
        // payload : data,
    };
};

export const addTodoSuccess =(err)=>{
    return {
        type : ADD_TODO_SUCCESS,
        payload:err,
    };
};

export const addTodoError =(id)=>{
    return {
        type : ADD_TODO_ERROR,
        payload:id,
    };
};


export const getTodoLoading =()=>{
    return {
        type : GET_TODO_LOADING,
        // payload : data,
    };
};

export const getTodoSuccess =(data)=>{
    return {
        type : GET_TODO_SUCCESS,
        payload:data,
    };
};

export const getTodoError =(err)=>{
    return {
        type : GET_TODO_ERROR,
        payload:err,
    };
};

export const removeTodo = (id)=>({
    type:REMOVE_TODO,
    payload: id,
})