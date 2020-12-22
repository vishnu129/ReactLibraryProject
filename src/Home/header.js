import React from 'react';

// eslint-disable-next-line no-undef
const {  Layout  } = antd ;

const { Header, Footer } = Layout;

function header(){
    return(
        <div>      
        <h1>Hai</h1> 
             <Layout>
                <Header>Header</Header>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    )
}
export default header