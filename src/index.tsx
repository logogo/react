import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom';
import router from './router';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    </ConfigProvider>,
    document.getElementById('root')
);
