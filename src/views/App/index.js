import React from 'react';
import oStyle from './index.less';
import Menu from './component/menu/index';

const app = () => {
    return (
        <div className={oStyle.container}>
            <Menu/>
        </div>
    );
};

export default app;
