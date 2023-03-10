import React, { useState, useMemo } from 'react';
export default function Demo1() {
    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(10);

    const text = useMemo(() => {
        return `num1: ${num1} | num2:${num2}`;
    }, [num2]);

    function handClick() {
        setNum1(2);
        setNum2(20);
    }

    return (
        <div>
            {text}
            <div><button onClick={handClick}>click!</button></div>
        </div>
    );
}
