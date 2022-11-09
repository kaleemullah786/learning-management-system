import React, {useState} from 'react';
import {Form, Input, Checkbox, Button} from 'antd';
import 'antd/dist/antd.min.css';
import './index.css'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')


  const {createUser} = UserAuth()
  const navigate = useNavigate()


  const onFinish = values => {
    createUser(values.email, values.password)
    .then(() => {
      navigate('/signin')
    })
    .catch(error => {
      setError(error.message)
    })
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <div className="illustration-wrapper">
          <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="register"/>
        </div>
        <Form
          name="register-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <p className="form-title">Create account</p>
      
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder="johndoe@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password 
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="register-form-button">
              SIGN UP
            </Button>
          </Form.Item>
          <p>Already have an account? <Link to='/signin' className='underline'>Sign In</Link></p>
        </Form>
      </div>
    </div>
  );
};

export default Register;

