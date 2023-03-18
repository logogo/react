import React, { useState, useRef } from 'react';
import { Upload } from 'antd';
/*
    fileSize: 限制文件大小

*/
const App = ({children,fileSize,multiple,maxCount, beforeUpload,showUploadList }) =>{
    const [allFillSize, setAllFillSize] = useState(0); // 全部文件大小
    const overFiles = useRef(false); // 是否超过当前限制文件
    const beforeUploadIntercept = (file,fileList)=>{ // 文件上传之前，判断文件大小,在执行传过来的beforeUpload
        for(let i = 0; i < fileList.length; i++){
            setAllFillSize(preVal=>{
                let countSize = preVal + fileList[i].size;
                if(countSize > fileSize){
                    overFiles.current = true;
                    return 0;
                }
            });
            if(overFiles.current){
                break;
            }
        }
        if(overFiles.current){
            return false;
        }else{
            return beforeUpload()
        }
    };
    const customRequest = (param)=>{
        const { onSuccess } = param;
        onSuccess(11111)
    }
    return (<Upload 
                beforeUpload={beforeUploadIntercept}
                multiple={multiple}
                maxCount={maxCount}
                showUploadList={showUploadList}
                customRequest={customRequest}
            >
                {children}
            </Upload>)
}
export default App;