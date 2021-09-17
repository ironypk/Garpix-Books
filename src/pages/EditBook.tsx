import React, {FC} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';
import {BookForm, FormValues} from '../components/BookForm';
import {Redirect, useParams} from 'react-router-dom';
import {Layout, Row} from 'antd';

export const EditBook: FC = () => {
    const {isLoading, status, books} = useTypedSelector(state => state.booksReducer)
    const {authors} = useTypedSelector(state => state.authorsReducer)
    const {editBookTC} = useActions()
    const {id} = useParams<{ id: string }>()
    const {title, year, author_id} = books[id]
    const authorsKeys = Object.keys(authors)
    const allAuthors = authorsKeys.map(authorID => authors[authorID])
    const onSubmitHandler = (values: FormValues) => {
        if (values.year) {
            editBookTC({id: id, year: values.year, title: values.title, authorID: values.authorID})
        }
    }
    if (status === 'success') return <Redirect to={'/books'}/>
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <BookForm loading={isLoading} submit={onSubmitHandler} authors={allAuthors}
                          myValues={{title, year, authorID: author_id}}/>
            </Row>
        </Layout>
    );
};
