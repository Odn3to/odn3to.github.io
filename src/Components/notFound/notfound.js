import React from 'react';
import { Typography } from 'antd';
import './notFound.css';

const { Title } = Typography;

const NotFound = () => (
    
    <div className="notfound-container">
        <Title level={2} style={{color: "white", }}>404 Not Found</Title>
    </div>
);

export default NotFound;