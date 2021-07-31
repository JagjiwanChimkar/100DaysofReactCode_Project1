const initialStat={
    country:{},
    city:{},
    status:{}
}
const reducer=(stat=initialStat,action)=>{
   switch (action.type) {
       case 'GET_STAT':
           return action.payload;
       default:
           return stat;
   }
}

export default reducer;