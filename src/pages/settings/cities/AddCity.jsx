import { PageHeader, 
  Col,
  Row,
  Form,
  Input,
  Button,
  Select,  
  message} from 'antd'
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { EnvironmentOutlined } from '@ant-design/icons';
import { useApiContext } from "../../../hooks/useApiContext"
import apis from '../../../services/apis'
import { v4 as uuid } from 'uuid';

const { Option } = Select;

export default function AddCity() {
  const {countries, countrydispatch, citydispatch} = useApiContext()
  
  const navigate = useNavigate()
  const[form] = Form.useForm();

  

  useEffect(()=>{
    if(countries.length<1)
    {
      apis.country.list(countrydispatch)
    }
  },[countries.length<1])

  const onFinish=(values)=>{
    let newValues ={...values, id:uuid()}
    apis.city.create(citydispatch,newValues).finally(form.resetFields())
}

const onFinishFailed=(error)=>{
  message.error("Please add mandatory fields",error)
}


  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={()=> navigate(-1)}
        title="Add City"
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
              label="City Code"
              name="cityCode"
              hasFeedback
              
              rules={[
                {
                  required: true,
                  message: "Please enter City Code",
                  
                },
                {
                  min:2,
                  message:"Minimum enter 2 characters"
                }
              ]}
            >
              <Input placeholder='Enter City code here'/>
          </Form.Item>
          <Form.Item
              label="Select Country"
              name="countryId"
              hasFeedback
              
              rules={[
                {
                  required: true,
                  message: "Please select country code",
                  
                }
              ]}
            >
              <Select placeholder="Select Country">
                {countries.map(country=>(

                <Option value={country.id}>{country.englishTitle}</Option>
                ))}
                
              </Select>
          </Form.Item>
          <Form.Item
              label="City Name in English"
              name="englishTitle"
              hasFeedback
              
              rules={[
                {
                  required: true,
                  message: "Please enter City name in English",
                  
                },
                {
                  min:3,
                  message:"Minimum enter 3 characters"
                }
              ]}
            >
              <Input placeholder='Enter City Name in English'/>
          </Form.Item>
          <Form.Item
              label="City Name in Arabic"
              name="arabicTitle"
              hasFeedback
              
              rules={[
                {
                  required: true,
                  message: "Please enter City Name in Arabic",
                  
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
            <Button type="primary"  htmlType="submit" icon={<EnvironmentOutlined />} style={{marginRight:'5px'}}>
          Add City
        </Button> 
        </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}
