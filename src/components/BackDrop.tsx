import React, {FC} from 'react';
import {Row, Spin} from 'antd';

export const BackDrop: FC = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            outline: 0,
            overflow: 'auto',
            backgroundColor: 'black',
            opacity: 0.5,
            zIndex: 1000
        }}>
            <Row justify={'center'} align="middle" className="h100">
                <Spin size="large"/>
            </Row>
        </div>
    );
};