import React, {useState} from 'react';
import {Form, Input, Checkbox, Button} from 'antd';
import 'antd/dist/antd.min.css';
import './index.css'
import { Link , useNavigate} from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const { login } = UserAuth();



  const onFinish = values => {
    console.log('success');
    login(values.email, values.password)
    .then(() => {
      navigate('/')
    })
    .catch(error => {
      setError(error.message)
    })
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}

        >
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder="johndoe@example.com"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password 
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              LOGIN
            </Button>
          </Form.Item>
          <p>Don't have an account? <Link to='/register' className='underline'>Register</Link></p>
        </Form>
      </div>
    </div>
  );
};

export default Login;

