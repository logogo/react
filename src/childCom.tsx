import React, { FC } from 'react';

interface childType {
    age: number;
}

const ChildCom: FC<childType> = ({ age }) => {
    return (
        <>
            <div>{age}</div>
        </>
    );
};

export default ChildCom;
