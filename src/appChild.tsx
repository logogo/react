import React, { FC } from 'react';
interface ageType {
    name: string;
}
const appChild: FC<ageType> = ({ name }) => {
    return <>{name}</>;
};

export default appChild;
