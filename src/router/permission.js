import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';

const Permission = props => {
    // 这个root是我们在前面路由中定义了 id: 'root'
    const { children, code } = props;
    const loaderData = useRouteLoaderData(code);
    if (!code || loaderData?.permissionRoutes?.includes(code)) {
        return <>{children}</>;
    }
};

export default Permission;
