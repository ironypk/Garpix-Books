import React, {FC} from 'react';
import {useActions} from '../hooks/useActions';
import {NavLink} from 'react-router-dom';
import {Button, Row, Table} from 'antd';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {BackDrop} from '../components/BackDrop';

export const Books:FC = () => {
    const {removeBookTC} = useActions()
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'AuthorLastName',
            dataIndex: 'authorLastName',
            key: 'authorLastName',
        },
        {
            title: 'AuthorFirstName',
            dataIndex: 'authorFirstName',
            key: 'authorFirstName',
        },
        {
          title:'Year',
          dataIndex:'year',
            key:'year'
        },
        {
            title:'More',
            dataIndex:   'more',
            key:'more',
            render: (id: string) => <NavLink to={`/book/${id}`}>more</NavLink>,

        },
        {
            title: 'Edit',
            key: 'edit',
            dataIndex: 'edit',
            render: (id: string) => <NavLink to={`/book/edit/${id}`}>edit</NavLink>,
        },
        {
            title: 'Delete',
            key: 'delete',
            dataIndex: 'delete',
            render: (id: string) => <Button onClick={() => removeBookTC(id)}>delete</Button>
        }
    ];
    const {books, isLoading} = useTypedSelector(state => state.booksReducer)
    const {authors} = useTypedSelector(state => state.authorsReducer)
    const keys = Object.keys(books)
    return (
        <>
            {isLoading && <BackDrop/>}
            <div style={{margin: 20}}>
                <Row justify={'end'}><Button type="link"><NavLink
                    to={'/book/create'}>Создать+</NavLink></Button></Row>
                <Table
                    columns={columns}
                    dataSource={
                        keys.map(id => {
                            return {
                                key: id,
                                title:books[id].title,
                                authorFirstName: authors[books[id].author_id].first_name,
                                authorLastName: authors[books[id].author_id].last_name,
                                year:books[id].year,
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
};
