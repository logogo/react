import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Row, Col } from 'antd';
import ShowNum from './compoent/showNum';

const AntdLi = () => {
    const [num, setNum] = useState(0);
    const dispatch = useDispatch();
    const [params] = useSearchParams();
    const counter = useSelector(state => state.AntdLiData);
    const id = params.get('aaa');
    console.log(id);
    console.log(4444444444);
    useEffect(() => {
        dispatch({
            type: 'AntdLi/acts',
            num: 555555
        });
    }, []);
    const add = () => {
        setNum(num + 1);
    };
    const stop = (num) => {
        setNum(num);
    };
    useEffect(() => {
        console.log(num);
    }, [num]);

    const showNum = useMemo(() => {
        return <ShowNum num={num} stop={stop}/>;
    }, [num]);

    return (
        <>
            <div>
                <Row>
                    <Col span={24} onClick={add}>col</Col>
                </Row>
            </div>
            <div>
                {counter.num}
            </div>
            <div>
                {showNum}
            </div>
        </>
    );
};

export default AntdLi;
