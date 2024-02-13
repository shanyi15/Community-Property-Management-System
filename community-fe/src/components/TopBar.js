import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import '../index.css';
import '../styles/TopBar.css';
import { LogoutOutlined } from "@ant-design/icons"
import { Menu, Button } from 'antd';

const items = [
    {
        label: (
          <a href="./dashboard" target="_self">
            Dashboard
          </a>
        ),
        key: 'dashboard',
        className: 'menu-item',
    },
    {
        label: (
          <a href="./payment" target="_self">
          Payment
        </a>
        ),
        key: 'payment',
        className: 'menu-item',
    },
    {
        label: 'Booking',
        key: 'SubMenu',
        className: 'menu-item',
        children: [
                {
                    label: 'Option 1',
                    key: 'setting:1',
                },
                {
                    label: 'Option 2',
                    key: 'setting:2',
                },
        ],
    },
    {
        label: (
          <a href="./posts" target="_self">
          Posts
          </a>
        ),
        key: 'posts',
        className: 'menu-item',
    },
];

const TopBar = () => {
    const [current, setCurrent] = useState('dashboard');
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (

        isLoggedIn ?

        <header className="header">
            <span className="title">EasyLife</span>
            <Menu 
              onClick={onClick} 
              selectedKeys={[current]} 
              mode="horizontal" 
              items={items}
              className="menu"
            />

            <div className="buttons">
                <LogoutOutlined className="logout-button" onClick={() => {setIsLoggedIn(false)}}/>
            </div>
        </header>
        :
        <header className="header">
            <span className="title">EasyLife</span>
            <div className="not-logged-in-buttons-1">
                <Button type="text" className="sign-in-button" href='./login' target="_self">Sign In</Button>
            </div>
            <div className="not-logged-in-buttons-2">
                <Button type="text" className="sign-up-button" href='./register' target="_self">Sign Up</Button>
            </div>            
        </header>
    )
};

export default TopBar;