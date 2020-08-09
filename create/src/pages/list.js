import React from 'react';
import { Table,  Button, Popconfirm, Card } from 'antd';

const dataSource = [{
  id:1,
  name:'产品1',
  date:'8.1',
  manager:'cwh',
  info:'new'
},
{
  id:2,
  name:'产品2',
  date:'8.1',
  manager:'cwh',
  info:'new'
},
{
  id:3,
  name:'产品3',
  date:'8.1',
  manager:'cwh',
  info:'new'
}]
function List(props) {
  const columns = [{
    title:'产品id',
    key:'id',
    width:80,
    align:'center',
    render:(txt, record, index) => index + 1
  },{
  title:'产品名称',
  dataIndex:'name'
  },{
  title:'产品负责人',
  dataIndex:'manager'
  },{ 
  title:'产品简介',
  dataIndex:'info'
  },{
  title:'创建时间',
  dataIndex:'date'
  },{
  title:'操作',
  render: (txt, record, index) => {
    return(
      <div>
        <Button type="primary" size="small">
          修改
        </Button>
        <Popconfirm title="确定删除此项？" 
        onCancel={() => console.log("用户取消删除")}
        onConfirm={() => console.log("用户确认删除")}
        >
        <Button style={{margin:'0 1rem'}} type="danger" size="small">
          删除
        </Button>
        </Popconfirm>
      </div>
    )
  }
}
]
  return(
    <Card
      title="产品列表"
      extra={
        <Button type ="primary" size="small"
        ononClick={() => props.history.push("/pages/Edit")}
        >
          新增
        </Button>
      }
      >
        <Table columns={columns} bordered dataSource={dataSource} />
      </Card>
      
  );
}

export default List;