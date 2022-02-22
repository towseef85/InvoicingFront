import { Button, PageHeader, Table, Space } from 'antd'
import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApiContext } from "../../../hooks/useApiContext"
import apis from '../../../services/apis'




export default function Cities() {
  const {cities, citydispatch} = useApiContext()
  
  useEffect(()=>{
    apis.city.list(citydispatch)
  },[cities.length<1])

  console.log("Cities", cities)
    const navigate = useNavigate()
    return (
      <>
       <PageHeader
          className="site-page-header"
          onBack={()=> navigate(-1)}
          title="Cities"
          subTitle="Find all the list of Cities added"
          extra={[
          <Button type='primary' onClick={()=>navigate('/addcity')}>Add City</Button>,
        ]}
        /> 

<Table dataSource={cities} rowKey={record=> record.id}>
         
         <Table.Column title="City Code" key="cityCode" dataIndex="cityCode"/>
         <Table.Column title="Arabic Name" key="arabicTitle" dataIndex="arabicTitle"/>
         <Table.Column title="English Name" key="englishTitle" dataIndex="englishTitle"/>
         {/* <Table.Column title="Mobile" key="mobile" dataIndex="mobile"/> */}
         <Table.Column title="Action" key="action" render={(text, record)=>(
         <Space size="middle">
             <Link to={`/citydetails/${record.id}`}>Details</Link>
            
         </Space>
     )}/>
           </Table>
        
      </>
    )
}
