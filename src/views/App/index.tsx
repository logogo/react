import React, { useState } from 'react';
import ChildCom from './components/childCom';
interface ceType {
    name: string;
    age: number;
}
const App = () => {
    const [count, setCount] = useState<number>(0);
    const ce: ceType = {
        name: '1111',
        age: 12
    };
    const change = (e: React.MouseEvent) => {
        console.log(e);
        setCount(100);
    };
    return (
        <>
            <div onClick={e => change(e)}>111111</div>
            <div>{count}</div>
            <ChildCom age={ce.age} count={111}>
                <div>666666</div>
            </ChildCom>
        </>
    );
};

export default App;
