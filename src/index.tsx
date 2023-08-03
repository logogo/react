import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './store';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container as any);
root.render(
    <ConfigProvider locale={zhCN}>
        <React.StrictMode>
            <Provider store={store}>
                <RouterProvider router={router}></RouterProvider>
            </Provider>
        </React.StrictMode>
    </ConfigProvider>
);
