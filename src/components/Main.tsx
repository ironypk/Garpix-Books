import React, {FC} from 'react';
import {
    NavLink
} from 'react-router-dom'
import {Col, Row, Typography} from 'antd';

export const Main: FC = () => {
    return (
        <Row justify={'center'} align={'middle'} className={'h100'}>
            <Col>
                <Typography.Title><NavLink to={'/books'}>Книги</NavLink></Typography.Title>
                <Typography.Title><NavLink to={'/authors'}>Авторы</NavLink></Typography.Title>
            </Col>
        </Row>
    )
}