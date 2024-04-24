import axios from "axios";

const baseUrl="http://localhost:9090/api/todolist";

export const createToDoList = (todoTask:any)=>axios.post(baseUrl,todoTask);

export const getToDoListById =(id:number)=>axios.get(baseUrl+"/"+id);

export const getAllToDoList=()=> axios.get(baseUrl);

export const updateToDoListById=(todoTask:any,id:number)=>axios.put(baseUrl+"/"+id,todoTask);

export const deleteToDoListById=(id:number)=>axios.delete(baseUrl+"/"+id);

export const completeTask=(id:number)=>axios.put(baseUrl+"/done/"+id);

export const inCompleteTask=(id:number)=>axios.put(baseUrl+"/notDone/"+id);