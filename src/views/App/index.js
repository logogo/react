import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import oStyle from './index.less';
import Menu from './component/menu/index';

const app = () => {
    const navigate = useNavigate();
    const changePage = useCallback(() => {
        navigate('/antdLi?aaa=11111');
    }, []);
    return (
        <div className={oStyle.container}>
            <Menu/>
            <div onClick={changePage}>1111111</div>
        </div>
    );
};

export default app;
