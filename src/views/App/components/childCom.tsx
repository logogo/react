import React, { useEffect, useRef } from 'react';

interface childType {
    age: number;
    count: number;
    children: React.ReactNode;
}

const ChildCom: React.FC<childType> = ({ age, count, children }) => {
    const node = useRef(null);
    useEffect(() => {
        console.log(node);
    }, []);
    return (
        <>
            <div ref={node}>{age}</div>
            {children}
            <div>{count}</div>
        </>
    );
};

export default ChildCom;
