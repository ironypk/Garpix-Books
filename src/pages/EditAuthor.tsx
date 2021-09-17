import React from 'react';
import {Redirect, useParams} from 'react-router-dom';
import {useActions} from '../hooks/useActions';
import {Layout, Row} from 'antd';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {AuthorForm, FormValues} from '../components/AuthorForm';

export const EditAuthor: React.FC = () => {
    const {authors, status, isLoading} = useTypedSelector(state => state.authorsReducer)
    const params = useParams<{ id: string }>()
    const {id, last_name, first_name} = authors[params.id]
    const {editAuthorTC} = useActions()
    const onSubmitHandler = (values: FormValues) => {
        const firstName = values.firstName.trim()
        const lastName = values.lastName.trim()
        editAuthorTC({id, lastName, firstName})
    }
    if (status === 'success') return <Redirect to={'/authors'}/>


    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <AuthorForm submit={onSubmitHandler} myValues={{lastName: last_name, firstName: first_name}}
                            loading={isLoading}/>
            </Row>
        </Layout>
    );
};