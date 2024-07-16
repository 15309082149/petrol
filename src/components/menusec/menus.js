import s from './menus.module.scss'
import React from 'react';
import {
    useNavigate,
} from 'react-router-dom'
import {
  AppstoreOutlined,
  SettingOutlined,
  InsertRowAboveOutlined,
  SaveOutlined,
  PieChartOutlined,
  FundOutlined,
  SlidersOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import {  Menu } from 'antd';
const items = [
  {
    key: '/execute/condition',
    icon: <InsertRowAboveOutlined />,
  },
  {
    key: '0',
    icon: <SettingOutlined />,
    children: [
      {
        key: '0',
        icon:<SaveOutlined />,
      },
      {
        key: '0',
        icon:<PieChartOutlined />,
      },
      {
        key: '0',
        icon:<FundOutlined />,
      },
      {
        key: '0',
        icon:<SlidersOutlined />,
      },
    ],
  },
  {
    key: '0',
    icon: <AppstoreOutlined />,
  },
  {
    key: '0',
    icon: <GlobalOutlined />,
  },
];
const Menus = () => {
    const navigate= useNavigate()
    const onClick = (e) => {
    if(e.key==='0') {
        console.log('click ', e);
    }
    else{
            navigate(`${e.key}`)
    }
  };
  return (
    <div
    className={s.all}
    >
      <Menu
        onClick={onClick}
      className={s.bj}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme='dark'
        items={items}
      />
    </div>
  );
}
export default Menus