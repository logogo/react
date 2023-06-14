import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';

const Permission = props => {
    // 这个root是我们在前面路由中定义了 id: 'root'
    const { children, code } = props;
    const loaderData = useRouteLoaderData(code);
    console.log(loaderData);
    console.log(22224444444);
    return <>{children}</>;
};

export default Permission;
