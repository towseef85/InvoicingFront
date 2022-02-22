import { Button, PageHeader, Table, Space } from 'antd'
import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoldOutlined } from '@ant-design/icons';
import { useApiContext } from "../../hooks/useApiContext"
import apis from '../../services/apis'


export default function InventoryList() {
    const navigate = useNavigate()
    const {inventoryItems, inventoryitemdispatch} = useApiContext()

    useEffect(()=>{
      apis.InventoryItems.list(inventoryitemdispatch)
    },[inventoryItems.length<1])
  
    console.log("inventory items", inventoryItems)
    return (
      <>
       <PageHeader
          className="site-page-header"
          onBack={()=> navigate(-1)}
          title="Inventory"
          subTitle="Find all the Inventory details here"
          extra={[
          <Button type='primary' icon={<GoldOutlined />} onClick={()=>navigate('/addinventory')}>Add Inventory</Button>,
          
        ]}
        /> 
         <Table dataSource={inventoryItems} rowKey={record=> record.id}>
         
         <Table.Column title="Item Code" key="itemCode" dataIndex="itemCode"/>
         <Table.Column title="Arabic Name" key="arabicName" dataIndex="arabicName"/>
         <Table.Column title="English Name" key="englishName" dataIndex="englishName"/>
         <Table.Column title="Price" key="price" dataIndex="price"/>
         <Table.Column title="VAT Percentage" key="vatPercentage" dataIndex="vatPercentage"/>
         <Table.Column title="Action" key="action" render={(text, record)=>(
         <Space size="middle">
             <Link to={`/inventoryitemdetails/${record.id}`}>Details</Link>
            
         </Space>
     )}/>
           </Table>
      </>
    )
}