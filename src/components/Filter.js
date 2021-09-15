import React,{ useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/usersActions";


function Filter() {
  const dispatch = useDispatch();
  const [filterData,setfilterData]=useState({
    name:'',
    country:'',
    city:'',
    status: ''
  });
  const stat = useSelector(state =>state.stat);

  return (
    <>
      <div className="flex justify-around m-2">
        <input 
          placeholder="Filter By Name" value={filterData.name} onChange={e=>{
          dispatch(getUsers());
          setfilterData({...filterData,name:e.target.value.toLowerCase()})}}/>
        
        <select value={filterData.country}  
        defaultValue=""
        onChange={e=>{
          dispatch(getUsers());
          setfilterData({...filterData,country:e.target.value});
          }}>
            <option value=''>Filter By Country</option>
            {
              Object.keys(stat.country).map((value,index)=>{
                return(
                  <option key={index} value={value}>{value}</option>
                )
              })
            }
        </select>

        <select value={filterData.city}  
        defaultValue=""
        onChange={e=>{
          dispatch(getUsers());
          setfilterData({...filterData,city:e.target.value});
          }}>
            <option value=''>Filter By City</option>
            {
              Object.keys(stat.city).map((value,index)=>{
                return(
                  <option key={index} value={value}>{value}</option>
                )
              })
            }
        </select>

        <select value={filterData.status}  
        defaultValue=""
        onChange={e=>{
          dispatch(getUsers());
          setfilterData({...filterData,status:e.target.value});
          }}>
            <option value=''>Filter By Status</option>
            {
              Object.keys(stat.status).map((value,index)=>{
                return(
                  <option key={index} value={value}>{value}</option>
                )
              })
            }
        </select>


        <button className="bg-yellow-400 px-4 rounded-xl" 
        onClick={() => {dispatch({ type: "FILTER",data:filterData })
      console.log('btn clicked :',filterData)}} >Filter</button>
       <button className="bg-blue-400 px-4 rounded-xl" onClick={()=>window.location.reload(false)}>Reload Data</button> 
      </div>
     
    </>
  );
}

export default Filter;
