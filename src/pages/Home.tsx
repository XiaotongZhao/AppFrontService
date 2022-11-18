import { Breadcrumb, Layout } from 'antd';
import { Space, Table, Tag } from 'antd';
const { Content } = Layout;

function Home() {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];

      let test = process.env.API_BASE_URL;
      debugger
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
            {process.env.API_BASE_URL}
          <Table dataSource={dataSource} columns={columns} />;
          </Content>
        </>
    );
}

export default Home;