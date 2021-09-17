import React, {FC} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {Button, Row, Table,} from 'antd';
import {NavLink} from 'react-router-dom'
import {useActions} from '../hooks/useActions';
import {BackDrop} from '../components/BackDrop';


export const Authors: FC = () => {
    const {deleteAuthorTC} = useActions()
    const columns = [
        {
            title: 'FirstName',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'SecondName',
            dataIndex: 'secondName',
            key: 'secondName',
        },
        {
            title: 'More',
            dataIndex: 'more',
            key: 'address',
            render: (id: string) => <NavLink to={`/author/${id}`}>more</NavLink>
        },
        {
            title: 'Edit',
            key: 'edit',
            dataIndex: 'edit',
            render: (id: string) => <NavLink to={`/author/edit/${id}`}>edit</NavLink>,
        },
        {
            title: 'Delete',
            key: 'delete',
            dataIndex: 'delete',
            render: (id: string) => <Button onClick={() => deleteAuthorTC(id)}>delete</Button>
        }
    ];
    const {authors, isLoading} = useTypedSelector(state => state.authorsReducer)
    const keys = Object.keys(authors)
    return (
        <>
            {isLoading && <BackDrop/>}
            <div style={{margin: 20}}>
                <Row justify={'end'}><Button type="link"><NavLink
                    to={'/author/create'}>Создать+</NavLink></Button></Row>
                <Table

                    columns={columns}
                    dataSource={
                        keys.map(id => {
                            return {
                                key: id,
                                firstName: authors[id].first_name,
                                secondName: authors[id].last_name,
                                more: id,
                                edit: id,
                                delete: id
                            }
                        })
                    }
                />
            </div>
        </>
    );
}