import React, {FC} from 'react';
import {Button, Form, Input} from 'antd';
import {FormikProps, withFormik, FormikErrors} from 'formik';


export interface FormValues {
    firstName: string
    lastName: string
}

export interface Props {
    myValues?: FormValues
    submit: (payload: FormValues) => void
    loading: boolean
}

interface OtherProps {
    loading: boolean,
    myValues?: FormValues
}


const InnerForm: FC<OtherProps & FormikProps<FormValues>> =
    ({
         loading, values, handleChange, handleBlur, handleSubmit, errors, touched
     }) => {
        return (
            <form onSubmit={handleSubmit}>
                <Form.Item
                    validateStatus={touched.firstName && errors.firstName ? 'error' : 'success'}
                    help={touched.firstName && errors.firstName}
                    rules={[{required: true}]}
                >
                    <Input
                        name="firstName"
                        placeholder="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>
                <Form.Item
                    validateStatus={touched.lastName && errors.lastName ? 'error' : 'success'}
                    help={touched.lastName && errors.lastName}
                    rules={[{required: true}]}
                >
                    <Input
                        name="lastName"
                        placeholder="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={loading}>
                        Создать
                    </Button>
                </Form.Item>

            </form>
        );
    }

export const AuthorForm = withFormik<Props, FormValues>({
    mapPropsToValues: (props) => (props.myValues ? props.myValues : {lastName: '', firstName: ''}),
    validate: (values) => {
        const errors: FormikErrors<FormValues> = {};
        if (!values.firstName || !values.firstName.trim()) {
            errors.firstName = 'This field is required!';
        } else if (!/^([^0-9]*)$/.test(values.firstName)) {
            errors.firstName = 'Invalid field format';
        }

        if (!values.lastName || !values.lastName.trim()) {
            errors.lastName = 'This field is required!';
        } else if (!/^([^0-9]*)$/.test(values.lastName)) {
            errors.lastName = 'Invalid field format';
        }
        return errors;

    },
    handleSubmit: (values, {props}) => {
        props.submit(values)
    }
})(InnerForm)
