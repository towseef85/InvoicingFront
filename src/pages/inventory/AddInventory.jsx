import { PageHeader, 
    Col,
    Row,
    Form,
    Input,
    Button,
    InputNumber } from 'antd'
  import React from 'react'
  import { useNavigate } from 'react-router-dom';
  import { GoldOutlined } from '@ant-design/icons';
  import { useApiContext } from "../../hooks/useApiContext"
import apis from '../../services/apis'
import { v4 as uuid } from 'uuid';
  
  export default function AddInventory() {

    const {inventoryitemdispatch, inventoryItems} = useApiContext();
  
    const navigate = useNavigate()
    const[form] = Form.useForm();
  
    const onFinish=(values)=>{
      let newValues = {...values, id:uuid(), price: Number(values.price), vatPercentage:Number(values.vatPercentage)}
      apis.InventoryItems.create(inventoryitemdispatch,newValues).finally(form.resetFields())
      console.log(newValues)
  }
  
  const onFinishFailed=(error)=>{
      console.log(error)
  }
    return (
      <>
       <PageHeader
          className="site-page-header"
          onBack={()=> navigate(-1)}
          title="Add Inventory"
          subTitle="Add all the details to add the inventory"
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
                label="Item Code"
                name="itemCode"
                hasFeedback
                
                rules={[
                  {
                    required: true,
                    message: "Please enter Item Code",
                    
                  },
                  {
                    min:3,
                    message:"Minimum enter 3 characters"
                  }
                ]}
              >
                <Input placeholder='Enter Item code here'/>
            </Form.Item>
            <Form.Item
                label="Item Name in Arabic"
                name="arabicName"
                hasFeedback
                
                rules={[
                  {
                    required: true,
                    message: "Please enter Item Name in Arabic",
                    
                  },
                  {
                    min:3,
                    message:"Minimum enter 3 characters"
                  }
                ]}
              >
                <Input placeholder='Enter Item Name in Arabic'/>
            </Form.Item>
            <Form.Item
                label="Item Name in English"
                name="englishName"
                hasFeedback
                
                rules={[
                  {
                    required: true,
                    message: "Please enter Item Name in English",
                    
                  },
                  {
                    min:3,
                    message:"Minimum enter 3 characters"
                  }
                ]}
              >
                <Input placeholder='Enter Item English Name'/>
            </Form.Item>
          
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary"  htmlType="submit" icon={<GoldOutlined />} style={{marginRight:'5px'}}>
            Add Item
          </Button> 
          </Form.Item>
            </Col>
            <Col span={12}>
         
            <Form.Item
                label="Item Price"
                name="price"
                hasFeedback
                
                rules={[
                  {
                    required: true,
                    message: "Please enter Item Price",
                    
                  }
                ]}
              >
                <Input placeholder='Enter Item price'/>
            </Form.Item>
            <Form.Item
                label="VAT %"
                name="vatPercentage"
                hasFeedback
                
                rules={[
                  {
                    required: true,
                    message: "Please enter VAT %",
                    
                  }
                ]}
              >
                <Input prefix="%" placeholder='Enter Item code here'/>
            </Form.Item>
            </Col>
          </Row>
        </Form>
      </>
    )
  }