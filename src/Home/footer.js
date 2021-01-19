import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { Card, Col, Row } from 'antd';
import './style.css';
import data from './home.json';
const { Header, Content, Footer } = Layout;



function getData() {
  console.log("This is get data");
  return data.footer;
}
function footer() {
  getData();
  const data1 = getData();
  return (
    <Layout>
      <Layout >
        {/* <Header className="site-layout-background" style={{ backgroundColor: 'cornsilk' }} /> */}
        {/* <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          </div>
        </Content> */}
        <Footer  >
          <div >
            <Row gutter={16}>
              {/* <Col span={8}> */}
                <Card title={data1.library.title1} className='title' >
                  <div className='words' key={data1.id}>

                  <div> <h3>{data1.library.content[0]}</h3></div>
                  <div> <h3>{data1.library.content[1]}</h3></div>
                  <div> <h3>{data1.library.content[2]}</h3></div>
                  <div> <h3>{data1.library.content[3]}</h3></div>
                  <div> <h3>{data1.library.content[4]}</h3></div>
                    
                  </div>
                </Card>
                {/* <Col span={8}> */}
                <Card title={data1.discover.title2} className='title' >
                  <div className='words' key={data1.id}>
                    <Link to='/{data1.discover.content[0]}'>
                      <li>{data1.discover.content[0]}</li>
                    </Link>
                    <Link to='/{data1.discover.content[1]}'>
                      <li>{data1.discover.content[1]}</li>
                    </Link> <Link to='/{data1.discover.content[2]}'>
                      <li>{data1.discover.content[2]}</li>
                    </Link> <Link to='/{data1.discover.content[3]}'>
                      <li>{data1.discover.content[3]}</li>
                    </Link>
                  </div>
                </Card>
              {/* </Col> */}
               
              
              {/* </Col> */}
              {/* <Col span={8}> */}
                {/* <Card title={data1.discover.title2} className='title' >
                  <div className='words' key={data1.id}>

                    <div><h3>{data1.discover.content[0]}</h3></div>
                    <div><h3>{data1.discover.content[1]}</h3></div>
                    <div><h3>{data1.discover.content[2]}</h3></div>
                    <div><h3>{data1.discover.content[3]}</h3></div>
                   
                  </div>
                </Card> */}
               
              {/* </Col> */}
              {/* <Col span={8}> */}
                <Card title={data1.help.title3} className='title' >
                  <div className='words' key={data1.id}>

                   <div> <h3>{data1.help.content[0]}</h3></div>
                   <div> <h3>{data1.help.content[1]}</h3></div>
                   <div> <h3>{data1.help.content[2]}</h3></div>
                   <div> <h3>{data1.help.content[3]}</h3></div>
                    
                  </div>
                </Card>
                
              {/* </Col> */}
            </Row>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );

}

export default footer
