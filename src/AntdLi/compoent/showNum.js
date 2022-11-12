import React  from 'react';

const ShowNum = function(props){
    return (
        <div onClick={()=>props.stop(2)}>{props.num}</div>
    )
}

export default ShowNum;