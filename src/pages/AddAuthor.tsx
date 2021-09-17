import React, {FC} from 'react';
import {Layout, Row} from 'antd';
import {AuthorForm, FormValues} from '../components/AuthorForm';
import {useActions} from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {Redirect} from 'react-router-dom'



export const AddAuthor:FC= () => {
    const {addAuthorTC} = useActions()
    const {status, isLoading} = useTypedSelector(state => state.authorsReducer)
    const onSubmitHandler = (values: FormValues) => {
        const firstName = values.firstName.trim()
        const lastName = values.lastName.trim()
        addAuthorTC({lastName, firstName})
    }
    if (status === 'success') return <Redirect to={'/authors'}/>
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <AuthorForm submit={onSubmitHandler} loading={isLoading}/>
            </Row>
        </Layout>
    );
};