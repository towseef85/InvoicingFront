import { Button, PageHeader, Space, Table } from 'antd'
import React, {useEffect} from 'react'
import { useApiContext } from "../../hooks/useApiContext"
import { UserAddOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom'
import apis from '../../services/apis'

export default function CustomersList() {
  const navigate = useNavigate()
  const {customers, customerdispatch} = useApiContext()
  
  useEffect(()=>{
    apis.customers.list(customerdispatch)
  },[customers.length<1])


  return (
    <>
    <PageHeader
          className="site-page-header"
          onBack={()=> navigate(-1)}
          title="Customers"
          subTitle="Find all the Customers here"
          extra={[
            <Button type='primary' icon={<UserAddOutlined />} onClick={()=>navigate('/addcustomer')}>Add Customer</Button>,
            
          ]}
        />
         <Table dataSource={customers} rowKey={record=> record.id}>
         
         <Table.Column title="Customer Code" key="customerCode" dataIndex="customerCode"/>
         <Table.Column title="Arabic Name" key="arabicName" dataIndex="arabicName"/>
         <Table.Column title="English Name" key="englishName" dataIndex="englishName"/>
         <Table.Column title="Mobile" key="mobile" dataIndex="mobile"/>
         <Table.Column title="Action" key="action" render={(text, record)=>(
         <Space size="middle">
             <Link to={`/countrydetails/${record.id}`}>Details</Link>
            
         </Space>
     )}/>
           </Table>
    </>
  )
}
