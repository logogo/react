import React, { useState, useCallback, useEffect } from 'react';

const maker = () => {
    const [count, setCount] = useState({ name: 'gao' });
    const change = useCallback(() => {
        alert(count.name);
    }, [count]);

    const change1 = () => {
        setCount((state) => {
            return { name: state.name + '1111' };
        });
    };
    useEffect(() => {
        alert('a');
    }, []);
    return (<div>
        <button onClick={change}>按钮</button>
        <span onClick={change1}>{count.name}</span>
    </div>);
};

export default maker;
