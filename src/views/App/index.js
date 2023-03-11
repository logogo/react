import React, { useCallback } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import oStyle from './index.less';
import Menu from './component/menu/index';

const app = () => {
    const navigate = useNavigate();
    const changePage = useCallback(() => {
        navigate('/antdLi?aaa=11111');
    }, []);
    return (
        <div>
            <Menu/>
            <div onClick={changePage}>1111111</div>
            <Outlet/>
        </div>
    );
};

export default app;
