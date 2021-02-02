import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { Card, Col, Row } from 'antd';
import './style.css';
import data from './home.json';
import blogdata from './blogs.json';
const { Content, Footer } = Layout;



function getData() {
  return data.footer;
}
function footer() {
  getData();
  const data1 = getData();
  return (
    <Layout className="footerbody">
      <Layout className="site-layout" style={{}}>

        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          </div>
        </Content>
        <Footer  >
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card title={data1.library.title1} bordered={false}>
                  <div className='words' key={data1.id}>
                    <Link to={"/" + data1.library.content[0]}>
                      <div> <h3>{data1.library.content[0]}</h3></div>
                    </Link>
                    <Link to={"/" + data1.library.content[1]}>
                      <div> <h3>{data1.library.content[1]}</h3></div>
                    </Link>
                    <Link to={"/" + data1.library.content[2]}>
                      <div> <h3>{data1.library.content[2]}</h3></div>
                    </Link>
                    <Link to={"/" + data1.library.content[3]}>
                      <div> <h3>{data1.library.content[3]}</h3></div>
                    </Link>

                  </div>

                </Card>
              </Col>
              <Col span={8}>
                <Card title={data1.discover.title2} bordered={false}>
                  <div className='words' key={data1.id}>
                    <Link to={'/' + data1.discover.content[0]}>
                      <div><h3>{data1.discover.content[0]}</h3></div>
                    </Link>
                    <Link to={'/' + data1.discover.content[1]}>
                      <div><h3>{data1.discover.content[1]}</h3></div>
                    </Link>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card title={data1.help.title3} bordered={false}>
                  <div className='words' key={data1.id}>
                    <Link to={"/" + data1.help.content[0]}>
                      <div> <h3>{data1.help.content[0]}</h3></div>
                    </Link>
                  </div>
                </Card>

              </Col>
            </Row>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );

}

export default footer