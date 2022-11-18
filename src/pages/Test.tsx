import { Breadcrumb, Layout } from 'antd';
const { Content } = Layout;

function Test() {
    return (
        <>
        <Breadcrumb style={{ margin: '16px 0' }}>
         <Breadcrumb.Item>Sub</Breadcrumb.Item>
         <Breadcrumb.Item>Test</Breadcrumb.Item>
         </Breadcrumb>
         <Content
          className="site-layout-background"
          style={{
           padding: 24,
           margin: 0,
           minHeight: 768,
          }}>
         This is test page
         </Content>
       </>
    );
}

export default Test;