import { useEffect } from "react";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Div } from "../styledUI/Button";
import { addTodoError, addTodoLoading, addTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess, removeTodo } from "../store/actions";

export const Todos = () =>{
    const [ text, setText] = useState ("")
    const {loading, todos, error} = useSelector((state) => ({
        loading : state.loading,
        todos:state.todos,
        error:state.error
    }),

    );
    const dispatch = useDispatch();
    useEffect(() =>{
        getTodos()
        
    },[])


    async function getTodos() {
        try{
            dispatch(getTodoLoading());
            const data = await fetch("http://localhost:3001/todos")
           .then((d)=> d.json())
           dispatch(getTodoSuccess(data))
        }catch(err){
            dispatch(getTodoError(err));
        }
    }
    const delTodo =  async (id) => {
        await fetch(`http://localhost:3001/todos/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
        });
        getTodos();
        dispatch(removeTodo(id));
    };

    const addTodo = () => {
        dispatch(addTodoLoading())
             fetch("http://localhost:3001/todos",{
                 method: "POST",
                 headers :{
                     "Content-Type": "application/json",
                 }, 
                 body: JSON.stringify
                 ({
                     status:false,
                     title:text
                 }) 
                })
                 .then((d)=>d.json())
                 .then((res)=>{
                     dispatch(addTodoSuccess(res));
                     getTodos()
                 })
                 .catch((err)=>{
                     dispatch(addTodoError(err))
                 })
    }
    return loading ? (
        <div>Loading....</div>
    ) :error ? (
        <div>Something went wrong</div>
    ): (
     <div>
        <input 
        value={text}   
        type='text'
         placeholder="Enter Todo"
         onChange={(e)=> setText(e.target.value)}/>
         <Button onClick={addTodo}>Add Todo</Button>
         {todos.map((e) => (
         <Div key={e.id}> {e.title}
         <Button  onClick={()=>delTodo(e.id)}>DELETE</Button>
         </Div>
         
         ))}
         
    </div>)
}   