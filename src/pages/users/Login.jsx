import React from 'react'
import { Form, Input, Button, Checkbox, Row, Image, Card } from "antd";
import { useState, useEffect } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './login.css'
import logo from "../../assets/logo.png"

export default function Login() {
  const navigate = useNavigate()

  const onFinish=()=>{
      navigate('/home')
  }
  return (
    <section className="bg-home bg-circle-gradiant d-flex align-items-center">
        
        <div className="bg-overlay bg-overlay-white">
       
          <Row>
            <div className="login-box">
              <Card>
                <div className="logo-box">

              <Image  preview={false} src={logo}  width={150}/>
                </div>
              <h2 style={{textAlign:'center'}}>Login</h2>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                email:'',
                password:''
                }}
                onFinish={onFinish}
            >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter Your Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Enter Your Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
  
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        
          
        </Form.Item>
      </Form>
              </Card>
            </div>
          </Row>
        </div>
      </section>
  )
}