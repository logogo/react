import React, { useState, useRef, useEffect } from 'react';

const Exam = (props) => {
    const [counter, setCounter] = useState({ name: 'gao', age: 11 });
    const counterRef = useRef(counter);
    const onAlertButtonClick = () => {
        setTimeout(() => {
            alert('Value: ' + counterRef.current.name);
        }, 3000);
    };
    const addCount = () => {
        setCounter(counter => {
            return { ...counter, name: 'li' };
        });
    };
    useEffect(() => {
        counterRef.current = counter;
        console.log(props);
        console.log(111111111111111);
    });
    return (
        <div>
            <p>You clicked {counter.name} times.</p>
            <button onClick={addCount}>Click me</button>
            <button onClick={onAlertButtonClick}>
              Show me the value in 3 seconds
            </button>
        </div>
    );
};
export default Exam;
