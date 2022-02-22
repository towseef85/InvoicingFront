import { PageHeader, 
  Col,
  Row,
  Form,
  Input,
  Button, 
  message} from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalOutlined } from '@ant-design/icons';
import { v4 as uuid } from 'uuid';
import { useApiContext } from "../../../hooks/useApiContext"
import apis from '../../../services/apis'

export default function AddCountry() {
  const navigate = useNavigate()
  const {countries, countrydispatch} = useApiContext()
  const[form] = Form.useForm();

  const onFinish=(values)=>{
    let newValues = {...values, id:uuid()}
    apis.country.create(countrydispatch, newValues).finally(form.resetFields())
    
}

const onFinishFailed=(error)=>{
  message.error("Please enter all the mandatory fields")
    
}
  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={()=> navigate(-1)}
        title="Add Country"
        subTitle="Add all the details to add a country"
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
              label="Country Code"
              name="countryCode"
              hasFeedback
              
              rules={[
                {
                  required: true,
                  message: "Please enter Country Code",
                  
                },
                {
                  min:2,
                  message:"Minimum enter 2 characters"
                }
              ]}
            >
              <Input placeholder='Enter Country code here'/>
          </Form.Item>
          <Form.Item
              label="Country Name in English"
              name="englishTitle"
              hasFeedback
              
              rules={[
                {
                  required: true,
                  message: "Please enter Country name in English",
                  
                },
                {
                  min:3,
                  message:"Minimum enter 3 characters"
                }
              ]}
            >
              <Input placeholder='Enter Item Name in English'/>
          </Form.Item>
          <Form.Item
              label="Country Name in Arabic"
              name="arabicTitle"
              hasFeedback
              
              rules={[
                {
                  required: true,
                  message: "Please enter Item Name",
                  
                },
                {
                  min:3,
                  message:"Minimum enter 3 characters"
                }
              ]}
            >
              <Input placeholder='Enter Item Name in Arabic'/>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary"  htmlType="submit" icon={<GlobalOutlined />} style={{marginRight:'5px'}}>
          Add Country
        </Button> 
        </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}
