import { Breadcrumb, Layout } from 'antd';
const { Content } = Layout;

function Home() {
    return (
        <>
         <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Content
           className="site-layout-background"
           style={{
            padding: 24,
            margin: 0,
            minHeight: 768,
           }}>
          This is home page
          </Content>
        </>
    );
}

export default Home;