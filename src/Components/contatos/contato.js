import React from 'react';
import { Typography,  Row, Divider, Col} from 'antd';
import { MailOutlined, LinkedinOutlined, GithubOutlined, PhoneOutlined } from '@ant-design/icons';
import './contato.css'

const { Title } = Typography;

const Contato = () => (
    
    <div className="contato-container">
        <Title level={2} style={{color: "white"}}>Contatos:</Title>
        <Divider className="contato-divider" />
        <Row gutter={[16, 16]} className="contato-row">
          <Col span={24} className="contato-col">
            <MailOutlined className="contato-icon" />
            <a href="mailto:odneto8812@gmail.com" className="contato-link">odneto8812@gmail.com</a>
          </Col>
          <Col span={24} className="contato-col">
            <LinkedinOutlined className="contato-icon" />
            <a href="https://www.linkedin.com/in/eng-odilonmartins/" target="_blank" rel="noopener noreferrer" className="contato-link">
              LinkedIn
            </a>
          </Col>
          <Col span={24} className="contato-col">
            <GithubOutlined className="contato-icon" />
            <a href="https://github.com/Odn3to" target="_blank" rel="noopener noreferrer" className="contato-link">
              GitHub
            </a>
          </Col>
          <Col span={24} className="contato-col">
            <PhoneOutlined className="contato-icon" />
            <span className="contato-link">(38) 9 9836-3811</span>
          </Col>
        </Row>
    </div>
);

export default Contato;