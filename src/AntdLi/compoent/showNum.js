import React,{useEffect}  from 'react';

const ShowNum = function({num,stop}){
    useEffect(()=>{
        alert('aaa')
    },[num])
    return (
        <div onClick={()=>stop(2)}>{num}</div>
    )
}

export default ShowNum;