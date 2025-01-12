import React from 'react';
import { Layout, Menu, Divider } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, HashRouter  } from 'react-router-dom';
import Sobre from './Components/sobre/sobre';
import Projetos from './Components/projetos/projetos';
import Contato from './Components/contatos/contato';
import NotFound from './Components/notFound/notfound';
import { MailOutlined, LinkedinOutlined, GithubOutlined,
    AppstoreOutlined, ContactsOutlined, UnorderedListOutlined } from '@ant-design/icons';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UnorderedListOutlined />}>
              <Link to="/sobre">Sobre</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
              <Link to="/projetos">Projetos</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ContactsOutlined />}>
              <Link to="/contato">Contato</Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Content className="content-container">
          <div className="site-layout-content">
            <HashRouter>
              <Routes>
                <Route path="/" element={<Navigate to="/sobre" replace />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </HashRouter>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center', color: 'white', backgroundColor: '#001f3f' }}>
          <Divider style={{ backgroundColor: 'white' }} />
          <div style={{ marginBottom: '10px' }}>
            <a href="mailto:odneto8812@gmail.com" style={{ margin: '0 10px', color: 'white' }}>
              <MailOutlined style={{ fontSize: '24px' }} />
            </a>
            <a
              href="https://www.linkedin.com/in/eng-odilonmartins/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '0 10px', color: 'white' }}
            >
              <LinkedinOutlined style={{ fontSize: '24px' }} />
            </a>
            <a
              href="https://github.com/Odn3to"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '0 10px', color: 'white' }}
            >
              <GithubOutlined style={{ fontSize: '24px' }} />
            </a>
          </div>
          <span style={{ color: 'white' }}>Odn3to ©2024. Todos os direitos reservados.</span>
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;