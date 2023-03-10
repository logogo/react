import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Exam from './component/exam';
import MeRef from './component/meRef';
import Bi from './component/bi';
import Menu1 from './component/menu';
import api from '@/api';
import { useSelector, useDispatch } from 'react-redux';


const app = ()=>{
    const [name, setName] = useState('asdasd')
    const appData = useSelector(state => state.appData);
    useEffect(()=>{
        api.test.queryTrainProjectDetail().then(res => {
            console.log(res);
            console.log(111116666);
        });
    },[])
    const changeName = useCallback(()=>{
        setName((prestate)=>prestate+ '111111')
    },[]);
    return (
        <div>
            <div>默认数据</div>
            <div>远程数据</div>
            <div>{appData.newsList}</div>
            {name}
            <button onClick={changeName}>按钮</button>
            <Exam {...{ name: 444444 }}/>
            <MeRef/>
            <Bi/>
            <Menu1/>
        </div>
    )
}

export default app;