import React from 'react';
import { Popover, Table, Divider,Button  } from 'antd';
import oStyle from './index.less';

const tableOrder = ({columns})=>{
    const dataSource = columns.filter(elt=>!(elt.title === '序号'|| elt.title=== '操作')).map(elt=>{
        return {
            colums: elt.title,
        }
    })
    const pannelColumns = [
        {
            title: '列展示',
            dataIndex: 'colums',
        },
        {
            title: '冻结'
        },
        {
            title: '排序'
        }
    ]
    const content = (
       <>
         <Table pagination={false} size="small" columns={pannelColumns} dataSource={dataSource}/>
         <Divider />
         <div className={oStyle.btns}>
            <Button>保存</Button>
            <Button>重置</Button>
            <Button>取消</Button>
         </div>
       </>
    )
    return (
        <>
            <Popover placement="bottomLeft" content={content} trigger="hover">
                <div>111111</div>
            </Popover>
        </>
    )
};

export default tableOrder;
