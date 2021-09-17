import React, {FC} from 'react';
import {Button, Form, Input, Select, DatePicker} from 'antd';
import {FormikProps, withFormik, FormikErrors} from 'formik';
import {AuthorType} from '../store/reducers/author/types';
import moment, {Moment} from 'moment'
import {formatDate} from '../utils/date';

export interface FormValues {
    title: string,
    authorID: string
    year: string | null
}

export interface Props {
    myValues?: {
        title: string,
        year: string
        authorID: string
    }
    authors: AuthorType[],
    submit: (payload: FormValues) => void
    loading: boolean
}

interface OtherProps {
    loading: boolean,
    myValues?: {
        title: string,
        year: string
        authorID: string
    }
    authors: AuthorType[],
}

const InnerForm: FC<OtherProps & FormikProps<FormValues>> =
    ({
         authors,
         loading,
         values,
         handleChange,
         handleBlur,
         handleSubmit,
         errors,
         touched,
         setFieldValue
     }) => {
        const selectDate = (date: Moment | null) => {
            if (date) {
                setFieldValue('year', formatDate(date.toDate()))
            }
        }
        return (
            <Form onFinish={handleSubmit}>
                <Form.Item
                    validateStatus={touched.title && errors.title ? 'error' : 'success'}
                    help={touched.title && errors.title}
                >
                    <Input
                        name="title"
                        placeholder="title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>
                <Form.Item
                    validateStatus={touched.year && errors.year ? 'error' : 'success'}
                    help={touched.year && errors.year}
                >
                    <DatePicker name="year" value={values.year ? moment(values.year) : null} onChange={selectDate}/>
                </Form.Item>

                <Form.Item
                    name="authorID"
                    validateStatus={touched.authorID && errors.authorID ? 'error' : 'success'}
                    help={touched.authorID && errors.authorID}
                >
                    <Select
                        defaultValue={values.authorID}
                        onBlur={handleBlur}
                        onChange={(value) => setFieldValue('authorID', value)}
                    >
                        {
                            authors.map(el => (
                                <Select.Option
                                    key={el.id}
                                    value={el.id}
                                >
                                    {`${el.first_name} ${el.last_name}`}
                                </Select.Option>
                            ))
                        }
                    </Select>
                </Form.Item>


                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={loading}>
                        Создать
                    </Button>
                </Form.Item>

            </Form>
        );
    }

export const BookForm = withFormik<Props, FormValues>({
    mapPropsToValues: (props) => {
        return props.myValues ? props.myValues : {
            title: '',
            year: null,
            authorID: ''
        }
    },
    validate: (values) => {
        const errors: FormikErrors<FormValues> = {};
        if (!values.title || !values.title.trim()) {
            errors.title = 'This field is required!';
        }
        if (!values.year) {
            errors.year = 'This field is required!';
        }
        if (!values.authorID) {
            errors.authorID = 'This field is required!';
        }
        return errors;
    },
    handleSubmit: (values, {props}) => {
        props.submit(values)
    }
})(InnerForm)
