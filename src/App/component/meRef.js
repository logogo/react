import React, { useState, useMemo, useEffect ,useRef} from 'react';
import { useSelector,useDispatch } from 'react-redux'

export default function(props){
    const [ count, setCount ] = useState(0);
    const dispatch = useDispatch()
    const counter = useSelector(state => state.appData)
    const doubleCount  = useMemo(()=>{
        return 2 * count
    },[count])
    const timerId = useRef();
    useEffect(()=>{
        timerId.current = setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        dispatch({
            type: 'acts',
            data: 13331
        })
        dispatch({
            type: 'acts1',
            data: 1111
        })
    }, []);
    useEffect(()=>{
        if(count>10){
            clearInterval(timerId.current)
        }
        console.log(counter)
    })
    return (
        <>
            <button  onClick={()=>{setCount(count+1)}}>Count:{count},double:{doubleCount}</button>
        </>
    )
}