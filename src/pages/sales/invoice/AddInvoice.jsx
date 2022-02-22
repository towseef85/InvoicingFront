import { PageHeader, 
    Col,
    Row,
    Form,
    Input,
    Button, 
    Select } from 'antd'
  import React from 'react'
  import { useNavigate } from 'react-router-dom';
  import { UserAddOutlined } from '@ant-design/icons';
import InvoiceItems from '../../../components/invoice/InvoiceItems';
import { useApiContext } from "../../../hooks/useApiContext"
import apis from '../../../services/apis'
import { useEffect } from 'react';

  const {Option} = Select

export default function AddInvoice() {
  const {customers, customerdispatch} = useApiContext()
    const navigate = useNavigate()
    const[form] = Form.useForm();
    

    useEffect(()=>{
        if(customers.length === 0) apis.customers.list(customerdispatch)
    },[])
  
    const onFinish=(values)=>{
      console.log(values)
  }
  
  const onFinishFailed=(error)=>{
      console.log(error)
  }

  const handleCustomerChange=(value)=>{
    const getcustomerName = customers.filter(x=>x.id==value)
    form.setFieldsValue({"customerName":getcustomerName[0].englishName})

  }
  return (
    <div style={{position:'relative', marginBottom:'40px'}}>
     <PageHeader
        className="site-page-header"
        onBack={()=> navigate(-1)}
        title="Add Invoice"
        subTitle="Add Invoice here"
      />
       <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        
      >
        <Row>
        <Col span={12}>
          <Form.Item
              label="Invoice No"
              name="invoiceNo"  
              initialValue={`INV${Math.floor(Math.random() * 100000 + 1)}`}                
            >
              <Input bordered={false}/>
          </Form.Item>
          <Form.Item
              label="Invoice date"
              name="invoiceDate"
              initialValue={new Date().toLocaleDateString()}
            >
             <Input bordered={false}/>
          </Form.Item>
          <Form.Item
              label="Customer code"
              name="customerCode"
              hasFeedback
              
              rules={[
                {
                  required: true,
                  message: "Please select Customer Code",
                  
                }
              ]}
            >
             
              <Select placeholder="Select Customer code" onChange={handleCustomerChange}>
                {customers && customers.map(customer=>(

                <Option value={customer.id}>{customer.customerCode}</Option>
                ))}
               
              </Select>
          </Form.Item>

          <Form.Item
              label="Customer Name"
              name="customerName"
            
            >
              <Input bordered={false}/>
          </Form.Item>
         
           
     
          </Col>
          <Col span={12}>
          <Form.Item
              label="Total Invoice Amount"
              name="totalInvoiceAmount"                  
            >
              <Input bordered={false}/>
          </Form.Item>
          <Form.Item
              label="Total VAT Amount"
              name="totalVatAmount"
            >
             <Input bordered={false}/>
          </Form.Item>
      
          <Form.Item
              label="Total Amount Including Tax"
              name="totalAmountIncludingTax"
            >
             <Input bordered={false}/>
          </Form.Item>
          <Form.Item
              label="Remarks"
              name="remarks"
            >
             <Input />
          </Form.Item>
          </Col>
          <div style={{position:'absolute', bottom:'-45px', left:'0px'}}>
                  
              <Button  type="primary" htmlType="submit" style={{marginRight:'5px'}}>
            Add Invoice 
          </Button>
                
          </div>
        </Row>
      </Form>
      <Col span={24}>
              <InvoiceItems/>
          </Col>
    </div>
  )
}
