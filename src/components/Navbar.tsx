import React, {FC} from 'react';
import {Layout, Menu, Row} from 'antd';
import {NavLink} from 'react-router-dom'
import {RouterNames} from '../router';

export const Navbar: FC = () => {
    return (
        <Layout.Header>
            <Row justify={'center'}>
                <Menu mode={'horizontal'} theme={'dark'} selectable={false}>
                    <Menu.Item key={RouterNames.MAIN}>
                        <NavLink to={RouterNames.MAIN}>Main</NavLink>
                    </Menu.Item>
                    <Menu.Item key={RouterNames.BOOKS}>
                        <NavLink to={RouterNames.BOOKS}>Books</NavLink>
                    </Menu.Item>
                    <Menu.Item key={RouterNames.AUTHORS}>
                        <NavLink to={RouterNames.AUTHORS}>Authors</NavLink>
                    </Menu.Item>
                </Menu>
            </Row>
        </Layout.Header>
    );
};