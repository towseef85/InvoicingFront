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
import { UserAddOutlined } from '@ant-design/icons';
import { useApiContext } from "../../hooks/useApiContext"
import apis from '../../services/apis'
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

const { Option } = Select;

export default function AddCustomer() {
  const {countries, countrydispatch, citydispatch, cities, customerdispatch} = useApiContext()

  const navigate = useNavigate()
  const[form] = Form.useForm();
  const [city, setCity] = useState(false)
  const [citydata, setCitydata] = useState([])

  useEffect(()=>{
    if(countries.length<1)
    {
      apis.country.list(countrydispatch)
    }
    if(cities.length<1) apis.city.list(citydispatch)
  },[countries.length<1])

  const onFinish=(values)=>{
    let newValues ={...values, id:uuid()}
    apis.customers.create(customerdispatch,newValues).finally(form.resetFields())
   // console.log(newValues)
}

const onFinishFailed=(error)=>{
    message.error("Please enter all the mandatory fields")
}
function handleCountryChange(value) {
  const getcity = cities.filter(x=>x.countryId==value)
  setCitydata(getcity)
  
}
  return (
    <>
    <PageHeader
       className="site-page-header"
       onBack={()=> navigate(-1)}
       title="Add Customer"
       subTitle="Add all the details to add the customer"
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
             label="Customer Code"
             name="customerCode"
             hasFeedback
             
             rules={[
               {
                 required: true,
                 message: "Please enter Customer Code",
                 
               },
               {
                 min:4,
                 message:"Minimum enter 4 characters"
               }
             ]}
           >
             <Input placeholder='Enter Customer code here'/>
         </Form.Item>
         <Form.Item
             label="FullName  in English"
             name="englishName"
             hasFeedback
             
             rules={[
               {
                 required: true,
                 message: "Please enter FullName in english",
                 
               },
               {
                 min:3,
                 message:"Minimum enter 3 characters"
               }
             ]}
           >
             <Input placeholder='Enter FullName in English'/>
         </Form.Item>
         <Form.Item
             label="Fullname in Arabic"
             name="arabicName"
             hasFeedback
             
             rules={[
               {
                 required: true,
                 message: "Please enter Fullname in arabic",
                 
               },
               {
                 min:3,
                 message:"Minimum enter 3 characters"
               }
             ]}
           >
             <Input placeholder='Enter Fullname in Arabic'/>
         </Form.Item>
         <Form.Item
             label="Mobile"
             name="mobile"
             hasFeedback
             
             rules={[
               {
                 required: true,
                 message: "Please enter mobile number",
                 
               }
             ]}
           >
             <Input prefix="+966" type="number" placeholder='Enter Mobile Number here'/>
         </Form.Item>
         <Form.Item
             label="Email Address"
             name="email"
             hasFeedback
             
             rules={[
               {
                 required: true,
                 message: "Please enter Email Address",
                 
               },
               {
                 type:'email',
                 message:'Please enter valid Email Address'
               }
             ]}
           >
             <Input type="email" placeholder='Enter Email Address here'/>
         </Form.Item>
         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
           <Button type="primary"  htmlType="submit" icon={<UserAddOutlined />} style={{marginRight:'5px'}}>
         Add Customer
       </Button> 
       </Form.Item>
         </Col>
         <Col span={12}>
         <Form.Item
              label="Select Country"
              name="countryId"
              hasFeedback
              
              rules={[
                {
                  required: true,
                  message: "Please select country",
                  
                }
              ]}
            >
              <Select placeholder="Select Country" onChange={handleCountryChange}>
                {countries.map(country=>(

                <Option value={country.id}>{country.englishTitle}</Option>
                ))}
                
              </Select>
          </Form.Item>
         <Form.Item
             label="Select City"
             name="cityId"
             hasFeedback
             
             rules={[
               {
                 required: true,
                 message: "Please select City",
                 
               }
             ]}
           >
              <Select placeholder="Select City">
                {citydata.map(city=>(

                <Option value={city.id}>{city.englishTitle}</Option>
                ))}
                
              </Select>
         </Form.Item>
         <Form.Item
             label="Address Line1"
             name="address1"
             hasFeedback
             
             rules={[
               {
                 required: true,
                 message: "Please enter add address",
                 
               }
             ]}
           >
             <Input placeholder='Enter Appartment No,Lane...'/>
         </Form.Item>
         <Form.Item
             label="Address Line2"
             name="address2"
             
             
            
           >
             <Input placeholder='Enter landmark...'/>
         </Form.Item>
         <Form.Item
             label="Address Line3"
             name="address3"  
           >
             <Input placeholder='Enter Area, Locality...'/>
         </Form.Item>
         </Col>
       </Row>
     </Form>
   </>
  )
}
