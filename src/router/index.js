import AsyncComponent from '@/component/asyncComponent';

const routers = [
    {
        path: '/',
        component: AsyncComponent(() => import(/*webpackPrefetch: true*/ '@/views/App')),
        exact:true,
        meta: {
            authority: '1111'
        }
    },
    {
        path: '/home',
        component: AsyncComponent(() => import(/*webpackPrefetch: true */ '@/views/Home')),
        meta: {
            authority: '1111'
        }
    },
    {
        path: '/antdLi',
        component:  AsyncComponent(() => import(/*webpackPrefetch: true */ '@/views/AntdLi'))
    }
];



export default routers;