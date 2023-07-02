import React from 'react';
import ChildCom from './childCom';
interface ceType {
    name: string;
    age: number;
}
const App = () => {
    const ce: ceType = {
        name: '1111',
        age: 12
    };
    return (
        <>
            <div>111111</div>
            <ChildCom age={ce.age} />
        </>
    );
};

export default App;
