import axios from "axios";
import { get_stat } from "./statActions";

export const getUsers=()=>async (dispatch)=>{
     console.log('getUsers called')
    try{
         const {data}=await axios.get('http://localhost:8000/users');
         dispatch({
            type: 'FETCH_ALL',
            payload: data
         });
         dispatch(get_stat(data));
         console.log('data fetched');

         
    }
    catch(error){
         console.log(error.message);
    }
} 

export const deleteUser=(id)=>async (dispatch)=>{
    try{
         await axios.delete(`http://localhost:8000/users/${id}`);
         dispatch({
            type: 'DELETE_USER',
            id:id 
         });
    }
    catch(error){
         console.log(error.message);
    }
} 

export const updateUser=(id,updatedPost)=>async (dispatch)=>{
     try {
          const {data}=await axios.patch(`http://localhost:8000/users/${id}`,updatedPost);
          dispatch({type: 'UPDATE_POST',payload: data});
          console.log("Update action called")
     } catch (error) {
      console.log(error.message);
     }
}


