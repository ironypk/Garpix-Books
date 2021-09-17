import React, {FC} from 'react';
import {BookForm, FormValues} from '../components/BookForm';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {Redirect} from 'react-router-dom';
import {Layout, Row} from 'antd';

import {useActions} from '../hooks/useActions';
import {formatDate} from '../utils/date';

export const AddBook: FC = () => {
    const {isLoading, status} = useTypedSelector(state => state.booksReducer)
    const {authors} = useTypedSelector(state => state.authorsReducer)
    const {addBookTC} = useActions()
    const authorsKeys = Object.keys(authors)
    const allAuthors = authorsKeys.map(authorID => authors[authorID])
    const onSubmitHandler = (values: FormValues) => {
        if (values.year) {
            addBookTC({
                created_at: formatDate(new Date()),
                year: values.year,
                title: values.title,
                author_id: values.authorID
            })
        }
    }
    if (status === 'success') return <Redirect to={'/books'}/>
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <BookForm loading={isLoading} submit={onSubmitHandler} authors={allAuthors}/>
            </Row>
        </Layout>
    );
};
