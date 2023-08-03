import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { updateCakeNum, updateCakeName, getMovieData } from '@/store/modules/cake';
import ChildCom from './components/childCom';
interface ceType {
    name: string;
    age: number;
}
const App = () => {
    const [count, setCount] = useState<number>(0);
    const numOfCakes = useSelector((state: RootState) => state.cake.numOfCakes);
    const nameOfCake = useSelector((state: RootState) => state.cake.nameOfCake);
    const list = useSelector((state: RootState) => state.cake.list);
    const dispatch = useDispatch();
    const ce: ceType = {
        name: '1111',
        age: 12
    };
    const change = (e: React.MouseEvent) => {
        console.log(e);
        setCount(100);
    };

    useEffect(() => {
        dispatch(updateCakeName('best2222 cake'));
        dispatch(updateCakeNum(6666));
        dispatch(getMovieData());
    }, []);
    return (
        <>
            <div onClick={e => change(e)}>111111</div>
            <div>{count}</div>
            <ChildCom age={ce.age} count={111}>
                <div>666666</div>
            </ChildCom>
            <div>
                {numOfCakes}/{nameOfCake}
            </div>
            <ul>
                {list.map((elt: any, key: number) => (
                    <li key={key}>
                        {elt.focus}/{elt.duration}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default App;
