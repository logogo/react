import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RouteObject from '@/routerobj.d.ts';

import Contain from '@/layout';
import App from '@/views/App';

const routers: RouteObject[] = [
    {
        path: '/',
        element: React.createElement(Contain),
        children: [
            {
                index: true,
                meta: {
                    title: '11111'
                },
                element: React.createElement(App)
            }
        ]
    }
];

export default createBrowserRouter(routers);
