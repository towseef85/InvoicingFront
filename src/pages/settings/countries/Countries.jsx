import { Button, PageHeader, Space, Table } from 'antd'
import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApiContext } from "../../../hooks/useApiContext"
import apis from '../../../services/apis'



export default function Countries() {
    const navigate = useNavigate()
    const {countries, countrydispatch} = useApiContext()

    useEffect(()=>{
      apis.country.list(countrydispatch)
    },[countries.length<1])
    return (
      <>
       <PageHeader
          className="site-page-header"
          onBack={()=> navigate(-1)}
          title="Countries"
          subTitle="Find all the list of countries added"
          extra={[
          <Button type='primary' onClick={()=>navigate('/addcountry')}>Add Country</Button>,
        ]}
        /> 
         <Table dataSource={countries} rowKey={record=> record.id}>
         <Table.Column title="Country Code" key="countryCode" dataIndex="countryCode"/>
         <Table.Column title="Arabic Name" key="arabicTitle" dataIndex="arabicTitle"/>
         <Table.Column title="English Name" key="englishTitle" dataIndex="englishTitle"/>
         <Table.Column title="Action" key="action" render={(text, record)=>(
         <Space size="middle">
             <Link to={`/countrydetails/${record.id}`}>Details</Link>
            
         </Space>
     )}/>
           </Table>
      </>
    )
}
