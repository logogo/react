import React from 'react';
import { Outlet } from 'react-router-dom';

const contain = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default contain;
