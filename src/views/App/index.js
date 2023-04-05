import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '@/api'
import Upload from '@/component/upload.js';
import oStyle from './index.less';


const app = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        // let data = {
        //     "userId":"3",
        //     "userName":"22",
        //     "menuId":3,
        //     "menuName":"菜单"
        // }
        // api.test.addBuryingPoint(data).then(res=>{
        //     console.log(res)
        // })
    }, []);
    const changePage = useCallback(() => {
        navigate('/antdLi?aaa=11111');
    }, []);
    const beforeUpload = ()=>{
        return false
    }
    const successFile = (str)=>{
        console.log(str);
    }
    return (
        <div>
            <div className={oStyle.container} onClick={changePage}>1111111</div>
            <Upload fileSize={1000} beforeUpload={beforeUpload} showUploadList={false} onSuccess={successFile}>
                <button>测试上传</button>
            </Upload>
        </div>
    );
};

export default app;
