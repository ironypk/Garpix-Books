import React, {FC} from 'react';
import {useParams} from 'react-router-dom'
import {useTypedSelector} from '../hooks/useTypedSelector';
import {Col, Row, Typography} from 'antd';

export const AboutAuthor: FC = () => {
    const params = useParams<{ id: string }>()
    const authors = useTypedSelector(state => state.authorsReducer)
    return (

        <Row justify={'center'} align={'middle'} className={'h100'}>
            <Col>
                <Typography.Title>Имя: {authors.authors[params.id].first_name}</Typography.Title>
                <Typography.Title>Фамилия: {authors.authors[params.id].last_name}</Typography.Title>
            </Col>
        </Row>

    );
};
