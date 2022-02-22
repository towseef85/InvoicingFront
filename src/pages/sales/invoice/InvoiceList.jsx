import { Button, PageHeader, Table } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const dataSource = [
    {
      key: '1',
      citycode: 'IND',
      citynameenglish: 'India',
      citynamearabic: 'الهند',
      action:<Link to="">Details</Link>
      
    },
    {
      key: '2',
      citycode: 'KSA',
      citynameenglish: 'Saudi Arabia',
      citynamearabic: 'سعودي',
      action:<Link to="">Details</Link>
    },
  ];

  const columns = [
    {
      title: 'City Code',
      dataIndex: 'citycode',
      key: 'citycode',
    },
    {
      title: 'City Name English',
      dataIndex: 'citynameenglish',
      key: 'citynameenglish',
    },
    {
      title: 'City Name Arabic',
      dataIndex: 'citynamearabic',
      key: 'citynamearabic',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
      }
  ];

export default function InvoiceList() {
    const navigate = useNavigate()
    return (
      <>
       <PageHeader
          className="site-page-header"
          onBack={()=> navigate(-1)}
          title="Invoice"
          subTitle="Find all the list of Cities added"
          extra={[
          <Button type='primary' onClick={()=>navigate('/addinvoice')}>Add Invoice</Button>,
        ]}
        /> 
        <Table dataSource={dataSource} columns={columns} />
      </>
    )
}
