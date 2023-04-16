import React, { useState, useEffect } from 'react';
import {Row, Col, Button,Form, Input, Select, Divider, Table, Space, Switch, Pagination,DatePicker } from 'antd';
import TableOrder from './Component/tableOrder'
import oStyle from './index.less'

const Supplier = () => {
    const columns = [
        {
            title: '序号',
            dataIndex: 'key',
            width: 70,
        },
        {
            title: '承运商编码',
            dataIndex: 'name'
        },
        {
            title: '供应商名称',
            dataIndex: 'age',
        },
        {
            title: '供应商类型',
            dataIndex: 'address',
        },
        {
            title: '合作方式',
            dataIndex: 'address',
        },
        {
            title: '合作情况',
            dataIndex: 'address',
        },
        {
            title: '供应商得分',
            dataIndex: 'address',
        },
        {
            title: '供应商邮箱',
            dataIndex: 'address',
        },
        {
            title: '供应商联系人',
            dataIndex: 'address',
        },
        {
            title: '供应商状态',
            key: 'action',
            render: (item) => (
                <Space size="middle">
                   <Switch checked={item.action} onChange={(val)=>handleExpandChange(val, item)} />
                </Space>
              ),
        },
        {
            title: '操作',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => (
                <div className={oStyle.operation}>
                    <span>查看</span>
                    <span>|</span>
                    <span>编辑</span>
                </div>
            ),
          },
    ];
    const [initialValues, setInitialValues] = useState({}); // form初始化数据
    const [supplierTypeList, setSupplierTypeList] = useState([]); //供应商类型数组
    const [tableData, setTableData] = useState([]); // 表格数据
    useEffect(()=>{
        setSupplierTypeList([
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'disabled',
              label: 'Disabled',
            },
            {
              value: 'Yiminghe',
              label: 'yiminghe',
            },
          ]);
          setTableData([
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              action: true
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
            },
            {
              key: '4',
              name: 'Disabled User',
              age: 99,
              address: 'Sidney No. 1 Lake Park',
            },
          ])
    },[])
    const onFinish = (val)=>{
        console.log(val);
        console.log(11111111);
    };
    const handleExpandChange = (val,item)=>{
        item.action = val;
        setTableData((arr)=> arr.slice(0))
    };
    const changePage = (page, pageSize) => {
        console.log(page);
        console.log(pageSize);
    }
    return (
        <>
            <Form
                name="basic"
                initialValues={initialValues}
                labelCol={{style: {width: '100px'}}}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
             <Row justify="space-between">
                <Col span={6}>
                    <Form.Item
                        label="供应商简码"
                        name="code"
                        >
                        <Input  placeholder="请输入供应商简码"/>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="供应商名称"
                        name="code"
                    >
                        <Input  placeholder="请输入供应商名称"/>
                    </Form.Item>
                </Col>
                <Col  span={6}>
                    <Form.Item
                        label="供应商类型"
                        name="code"
                    >
                        <Select
                            placeholder="请选择供应商"
                            options={supplierTypeList}
                        />
                    </Form.Item>
                </Col>
             </Row>
             <Row justify="space-between">
                <Col  span={6}>
                    <Form.Item
                        label="合作形式"
                        name="code"
                    >
                        <Input  placeholder="请输入供应商类型"/>
                    </Form.Item>
                </Col>
                <Col  span={6}>
                    <Form.Item
                        label="合作情况"
                        name="code"
                    >
                        <Input  placeholder="请输入供应商类型"/>
                    </Form.Item>
                </Col>
                <Col  span={6}>
                    <div className={oStyle.butns}>
                        <div></div>
                        <div class={oStyle.leftBtns}>
                            <Button type="primary">
                                查询
                            </Button>
                            <Button>
                                重置
                            </Button>
                        </div>
                    </div>
                </Col>
             </Row>
             <DatePicker/>
            </Form>
            <Divider dashed />
            <div className={oStyle.contents}>
                <div className={oStyle.tabOperate}>
                   <div className={oStyle.btns}>
                        <Button>新增</Button>
                        <Button>导入</Button>
                        <Button>导出</Button>
                        <Button>导出日志</Button>
                   </div>
                    <TableOrder
                        columns={columns}
                    />
                </div>
                <div className={oStyle.tables}>
                    <Table
                        columns={columns}
                        dataSource={tableData}
                        scroll={{
                            x: 1500
                        }}
                    />
                </div>
                <Pagination current={2} total={5000} size={10} onChange={changePage} />;
            </div>
        </>
    )
};

export default Supplier;