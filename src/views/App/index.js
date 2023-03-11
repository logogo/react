import React from 'react';
import oStyle from './index.less';
import Menu from './component/menu/index.js';

console.log(oStyle);
console.log(11111);
const app = () => {
    return (
        <div className={oStyle.container}>
            <Menu/>
            <div>22222222</div>
        </div>
    );
};

export default app;
