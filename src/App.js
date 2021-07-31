import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_stat } from "./actions/statActions";
import { getUsers } from "./actions/usersActions";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";


function App() {
  console.log('render');
  const dispatch = useDispatch();
 
  const users = useSelector(state=>state.users);
  const stat = useSelector(state=>state.stat);
   
  
  useEffect(()=>{
    dispatch(getUsers());
    dispatch(get_stat(users));
    // eslint-disable-next-line
  },[dispatch])
  
 
  console.log('In APP :',users,stat);
  
  return (
    <div className="mx-10">
      <p className="text-5xl my-5">Welcome to Dashboard</p>
      <Dashboard />
      <Filter/>
      <Pagination/>
    </div>
  );
}

export default App;
