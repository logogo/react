import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AsyncComponent from '@/component/asyncComponent';

const App = AsyncComponent(() => import(/* webpackPrefetch: true*/ '@/views/App'));
const Home = AsyncComponent(() => import(/* webpackPrefetch: true */ '@/views/Home'));
const AntdLi = AsyncComponent(() => import(/* webpackPrefetch: true */ '@/views/AntdLi'));
const NotFound = AsyncComponent(() => import(/* webpackPrefetch: true */ '@/views/NotFound'));

const routers = [
    {
        path: '/',
        element: <App/>,
        exact: true,
        meta: {
            authority: '1111'
        },
        children: [
            {
                index: true,
                element: <div>2222222</div>
            },
            {
                path: 'article',
                element: 4444444
            }
        ]
    },
    {
        path: '/home',
        element: <Home/>,
        meta: {
            authority: '1111'
        }
    },
    {
        path: '/antdLi',
        element: <AntdLi/>
    },
    {
        path: '*',
        element: <NotFound />
    }
];

export default createBrowserRouter(routers);
