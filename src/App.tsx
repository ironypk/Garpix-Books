import React from 'react';
import {AppRouter} from './components/AppRouter';
import {Navbar} from './components/Navbar'
import {Layout} from 'antd';
import './App.css';

function App() {
    return (
        <Layout>
            <Navbar/>
            <Layout.Content className={'h100'}>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
}

export default App;
