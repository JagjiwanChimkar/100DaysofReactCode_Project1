
export const get_stat=(users)=>(dispatch)=>{
    console.log('getStat called ')
    console.log('users from action:',users)
    const country={};
    const city={};
    const status={};
    const student={};
    
    users.forEach(user=>{
        country[user.address.country]=1+( country[user.address.country] || 0);
        city[user.address.city]=1+( city[user.address.city] || 0) ;
        status[user.status]=1+( status[user.status] || 0);
        student[user.code]=1;
    })

    const stat={
        country,
        city,
        status,
        student
    }

    dispatch({
        type:'GET_STAT',
        payload:stat
    })
}