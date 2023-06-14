import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Skeleton } from 'antd';
import Permission from './permission';

const Layout = lazy(() => import('@/layout'));
const App = lazy(() => import(/* webpackPrefetch: true*/ '@/views/App'));
const Home = lazy(() => import(/* webpackPrefetch: true */ '@/views/Home'));
const AntdLi = lazy(() => import(/* webpackPrefetch: true */ '@/views/AntdLi'));
const NotFound = lazy(() => import(/* webpackPrefetch: true */ '@/views/NotFound'));
const Supplier = lazy(() => import(/* webpackPrefetch: true */ '@/views/supplier'));

// 懒加载配置处理
const lazyLoad = (Component, code) => {
    return (
        <Permission code={code}>
            <Suspense fallback={<div>loading...</div>}>{Component}</Suspense>
        </Permission>
    );
};

const routers = [
    {
        path: '/',
        element: (
            <Suspense fallback={<Skeleton active />}>
                <Layout />
            </Suspense>
        ),
        children: [
            {
                index: true,
                meta: {
                    authority: '1111'
                },
                element: <div>2222222</div>
            },
            {
                path: 'article',
                id: 'article',
                meta: {
                    title: '测试'
                },
                element: lazyLoad(<App />, 'article')
            },
            {
                path: 'supplier',
                id: 'supplier',
                element: lazyLoad(<Supplier />, 'supplier')
            },
            {
                path: 'home',
                id: 'home',
                element: lazyLoad(<Home />, 'home'),
                meta: {
                    authority: '1111'
                }
            }
        ]
    },
    {
        path: '/antdLi',
        element: (
            <Suspense fallback={<Skeleton active />}>
                <Layout />
            </Suspense>
        ),
        children: [
            {
                index: true,
                meta: {
                    authority: '1111'
                },
                element: lazyLoad(<AntdLi />, 'antdLi')
            }
        ]
    },
    {
        path: '*',
        element: lazyLoad(<NotFound />)
    }
];

const checkAuth = router => {
    // 请求的参数
    return {
        router
    };
};

const addLoader = routers => {
    // 只给最底层加loader方法
    for (let i = 0; i < routers.length; i++) {
        if (routers[i].children) {
            addLoader(routers[i].children);
        } else {
            routers[i].loader = () => checkAuth(routers[i]);
        }
    }
};

addLoader(routers);

export default createBrowserRouter(routers);
