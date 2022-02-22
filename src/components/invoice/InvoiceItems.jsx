import React,{ useState, useEffect } from 'react'
import {
    Col,
    PageHeader,
    Row,
    Form,
    Input,
    Button,
    Select,
    DatePicker,
    Typography,
  } from "antd";
  import { v4 as uuid } from "uuid";
  import { CloseOutlined, UsergroupAddOutlined,PlusOutlined } from "@ant-design/icons";
  
import { useApiContext } from "../../hooks/useApiContext"

import './styles.css'
import apis, { Items } from '../../services/apis';

const {Option} = Select

export default function InvoiceItems() {
  const {inventoryItems, inventoryitemdispatch, items, invoiceItemdispatch} = useApiContext()
    const [invoiceItems, setInvoiceItems] = useState([])
    const [itemscodes, setItemscodes] = useState([])
    const [price, setPrice] = useState()
    const [quantity, setQuantity] = useState()
    const [isSaved, setIsSaved] = useState(true)
    const [invoiceform] = Form.useForm()
    const [fetchedPrice, setFetchedPrice] = useState(0)

    useEffect(()=>{
      if(inventoryItems.length<1) apis.InventoryItems.list(inventoryitemdispatch)
      setItemscodes(inventoryItems)
    })
    const deleteItem =(id) =>{
        console.log(id)
    }

    const addInvoiceItem=(values)=>{
      console.log(values)
        let newValues = {
          ...values,
          id: uuid(),
         
          amount: fetchedPrice * values.quantity,
        };
        apis.Items.add(invoiceItemdispatch, newValues)
        console.log(newValues)
        invoiceform.resetFields();
        setFetchedPrice(0)  
        
      }
    const handleItemCodeChange=(value)=>{
      console.log("item code value",value)
        const result = itemscodes.filter(x=>x.id === value)
        invoiceform.setFieldsValue({"price": result[0] && result[0].price, "itemName": result[0] && result[0].englishName})
        setFetchedPrice(result[0] && result[0].price);
    }
  return (
    <>
     <table class="table table-bordered">
          <thead>
            <tr>
              <td>
            
                item Code
              </td>
              <td>
               
                Item Name
              </td>
              <td>
                Price
              </td>
              <td>
                Quantity
              </td>
              <td>
                VAT Amount
              </td>
              <td>
                Total with VAT
              </td>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <>
                <tr>
                  <td>{i == 0 ? 1 : i + 1}</td>
                  <td>{item.itemName}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{(item.price * item.quantity * 0.15).toFixed(2)}</td>
                  <td>
                    {(item.amount + item.price * item.quantity * 0.15).toFixed(2)}
                    <Button
                      style={{ marginLeft: "10px" }}
                      onClick={() => deleteItem(item.id)}
                      danger
                      icon={<CloseOutlined />}
                      size="small"
                      shape="circle"
                    />
                  </td>
                </tr>
              </>
            ))}
            <tr>
            
              {isSaved && 
                
              <td colSpan={6}>
               
                <Form form={invoiceform} layout="inline" onFinish={addInvoiceItem} name="horizontal_login" style={{width:'100%'}}>
                <Form.Item
                style={{width:'15%'}}
          name="itemcode"
          rules={[
            {
              required: true,
              message: "Please select Item code",
            },
          ]}
        >
              <Select style={{width:'90%'}} showSearch 

              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onChange={handleItemCodeChange}>
                {itemscodes.length !==0 && itemscodes.map(item =>(

                <Option value={item.id}>{item.itemCode}</Option>
                ))}
                
              </Select>
      

        </Form.Item>
        <Form.Item
          name="itemName"
          
        >
          <Input
            placeholder="item Name"
            style={{width:'90%'}}
          />
        </Form.Item>
        <Form.Item
          name="price"
          rules={[
            {
              required: true,
              message: "Please enter Price",
            },
          ]}
        >
          <Input
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            style={{width:'90%'}}
          />
        </Form.Item>
        <Form.Item
          name="quantity"
          rules={[
            {
              required: true,
              message: "Please enter quantity",
            },
          ]}
        >
          <Input
            placeholder="Quantity"
            onChange={(e) => setQuantity(e.target.value)}
            style={{width:'90%'}}
          />
        </Form.Item>
        <Form.Item name="amount" rules={[{ required:false}]}>
          <label name="amount" style={{width:'90%'}}>{(fetchedPrice * quantity).toFixed(2)}</label>
        </Form.Item> 
        <Form.Item shouldUpdate className="float-right">
          {() => (
            <Button
             type="primary"
             htmlType="submit"
             icon={<PlusOutlined />}
            >
              Add
            </Button>
          )}
        </Form.Item>
                </Form>
              </td>
              }
              
            </tr>
            <tr>
              <td colSpan={5} class="text-right f-bold p-10">
                الاجمالي قبل الضريبة
                <br />
                Total before VAT:
              </td>
              <td>SR {(items.reduce((a, b) => a + b.amount, 0)).toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan={5} class="text-right f-bold p-10">
                الاجمالي بعد الضريبة
                <br />
                Total VAT Amount:
              </td>
              <td>SR {(items.reduce((a, b) => a + b.amount, 0) * 0.15).toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan={5} class="text-right f-bold p-10">
                الرصيد المستحق
                <br />
                Due Amount:
              </td>
              <td>
                SR{" "}
                {(items.reduce((a, b) => a + b.amount, 0) +
                  items.reduce((a, b) => a + b.amount, 0) * 0.15).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
    </>
  )
}
