import React, {FC} from 'react';
import {useParams} from 'react-router-dom';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {Col, Row, Typography} from 'antd';

export const AboutBook: FC = () => {
    const params = useParams<{ id: string }>()
    const books = useTypedSelector(state => state.booksReducer)
    const authors = useTypedSelector(state => state.authorsReducer)
    return (

        <Row justify={'center'} align={'middle'} className={'h100'}>
            <Col>
                <Typography.Title>Название: {books.books[params.id].title}</Typography.Title>
                <Typography.Title>Фамилия
                    Автора: {authors.authors[books.books[params.id].author_id].last_name}</Typography.Title>
                <Typography.Title>Имя
                    Автора: {authors.authors[books.books[params.id].author_id].first_name}</Typography.Title>
                <Typography.Title>Год: {books.books[params.id].year}</Typography.Title>
            </Col>
        </Row>

    );
};
