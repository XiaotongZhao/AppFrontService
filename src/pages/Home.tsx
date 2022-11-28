import { Breadcrumb, Layout } from 'antd';
import { Space, Table, Tag } from 'antd';
import { apiClient, Test, SeachModel } from '../api/service-proxies';
import { useState, useEffect } from 'react';
const { Content } = Layout;

function Home() {
  const [totalCount, SetTotalCount] = useState(0);
  const [dataSource, SetDataSource] = useState(new Array<Test>);
  const [isLoading, setIsLoading] = useState(false);
  const [seachModel, SetSearchModel] = useState(new SeachModel({ skip: 0, size: 10, keyword: "" }));
  let client = new apiClient(process.env.REACT_APP_API_BASE_URL);

  const customFetch = async () => {
    setIsLoading(true);
    const res = await client.getTestList(seachModel);
    SetTotalCount(res.count as number);
    SetDataSource(res.data as Array<Test>);
    setIsLoading(false);
  }

  useEffect(() => {
    customFetch();
  }, []);

  const search = async (keyword: string, current: number, pageSize: number) => {
    seachModel.skip = (current - 1) * pageSize;
    seachModel.size = pageSize;
    SetSearchModel(seachModel)
    setIsLoading(true);
    const res = await client.getTestList(seachModel);
    SetTotalCount(res.count as number);
    SetDataSource(res.data as Array<Test>);
    setIsLoading(false);

  }


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




  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home page</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 768,
        }}>
        <Table dataSource={dataSource} columns={columns}
          onChange={async (e) => {
            await search("", e.current as number, e.pageSize as number);
          }}
          pagination={{ pageSize: seachModel.size, total: totalCount, showSizeChanger: true }} loading={isLoading} scroll={{ y: 1500 }} sticky />
      </Content>
    </>
  );
}

export default Home;