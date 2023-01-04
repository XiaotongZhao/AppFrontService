import { Breadcrumb, Layout } from 'antd';
import { Input, Space, Table, Button, Modal, Col, Row, Form, InputNumber, message } from 'antd';
import { appApiClient, Test, SeachModel } from '../api/appApiClient';
import { useState, useEffect } from 'react';
const { Search } = Input;
const { Content } = Layout;

function Home() {
  const skip = 1;
  const size = 10;
  const [totalCount, SetTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, SetDataSource] = useState(new Array<Test>);
  const [seachModel, SetSearchModel] = useState(new SeachModel({ skip: skip, size: size, keyword: "" }));
  const [messageApi, contextHolder] = message.useMessage();

  const [test, setTest] = useState(new Test());
  const [form] = Form.useForm();

  let client = new appApiClient(process.env.REACT_APP_API_BASE_URL);

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Action is successful!',
    });
  };

  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'Action is failed!',
    });
  };

  const onFinish = async (event: Test) => {
    test.age = event.age;
    test.name = event.name;
    test.address = event.address;
    test.country = event.country;
    let res = false;
    if (test.id === 0) {
      res = await client.addTest(test);
    } else {
      res = await client.updateTest(test);
    }
    if (res === true) {
      success();
    } else {
      warning();
    }
    setIsModalOpen(false);
    onSearch("");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const deleteTest = async (id: number) => {
    let res = await client.deleteTest(id);
    if (res === true) {
      success();
    } else {
      warning();
    }
    onSearch("");
  }


  const editDetail = async (id: number) => {
    setIsModalOpen(true);
    let test = await client.findTest(id);
    setTest(test);
    form.setFieldsValue({ name: test.name, age: test.age, address: test.address, country: test.country })
  };

  const showModal = () => {
    setTest(new Test());
    form.setFieldsValue({ name: "", age: null, address: "", country: "" })
    setIsModalOpen(true);
  };

  const handleOk = (e: any) => {
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSearch = async (keyword: string) => {
    await search(keyword, skip, size)
  }

  useEffect(() => {
    search("", skip, size);
  }, []);

  const search = async (keyword: string, skip: number, pageSize: number) => {
    seachModel.keyword = keyword;
    seachModel.skip = (skip - 1) * pageSize;
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
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
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
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },

    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Test) => {
        return (
          <>
            <Space>
              <Button type="primary" onClick={() => editDetail(record.id as number)} ghost>
                Detail
              </Button>
              <Button onClick={() => deleteTest(record.id as number)} danger>
                Delete
              </Button>
            </Space>
          </>
        )
      },
    }
  ];

  return (
    <>
      {contextHolder}
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
        <Space direction="vertical">
          <Row >
            <Col className="gutter-row" >
              <Search placeholder="input keyword" onSearch={onSearch} enterButton />
            </Col>
            <Col className="gutter-row">
              <Button type="primary" onClick={showModal}>
                Open Modal
              </Button>
            </Col>
          </Row>
          <Modal title="Basic Modal" open={isModalOpen}
            okButtonProps={{ form: 'category-editor-form', htmlType: 'submit' }}
            okText="Submit" onOk={handleOk} onCancel={handleCancel}>
            <Form
              id='category-editor-form'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              form={form}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input name="name" />
              </Form.Item>
              <Form.Item
                label="Age"
                name="age"
                rules={[{ required: true, message: 'Please input your age!' }]}
              >
                <InputNumber name="age" />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: 'Please input your address!' }]}
              >
                <Input name="address" />
              </Form.Item>
              <Form.Item
                label="Country"
                name="country"
                rules={[{ required: true, message: 'Please input your country!' }]}
              >
                <Input name="country" />
              </Form.Item>
            </Form>
          </Modal>
        </Space>
        <Table dataSource={dataSource} columns={columns}
          onChange={async (e) => {
            await search(seachModel.keyword as string, e.current as number, e.pageSize as number);
          }}
          pagination={{ pageSize: seachModel.size, total: totalCount, showSizeChanger: true }} loading={isLoading} scroll={{ y: 1500 }} sticky />
      </Content>
    </>
  );
}

export default Home;