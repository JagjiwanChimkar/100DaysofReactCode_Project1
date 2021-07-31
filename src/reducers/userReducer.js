const reducer=(users=[],action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
       case 'DELETE_USER':
            return users.filter(user=>user.id!==action.id)  
        case 'SORT':
            return users.slice().sort((a, b)=> {
                var objA,objB;
                if(action.value==='name'){
                      objA = a[action.value].toLowerCase();
                      objB = b[action.value].toLowerCase();
                }else if(action.value==='code'){
                    objA = a[action.value]
                    objB = b[action.value]
                }else{
                    objA = a.address[action.value].toLowerCase();
                    objB = b.address[action.value].toLowerCase();
                }

                if (objA < objB)
                  return -1
                if (objA > objB)
                  return 1
                return 0
              });
        case 'FILTER':
            console.log('filter called',action.data)
            return users.filter(user=> {
                return user.name.toLowerCase().includes(action.data.name) &&
                 user.address.country===action.data.country &&
                 user.address.city===action.data.city &&
                 user.status===action.data.status
            })   
        case 'UPDATE_POST':
            return users.map(user=>user.id===action.payload.id?action.payload:user)      
        default:
            return users;
    }
}

export default reducer;
