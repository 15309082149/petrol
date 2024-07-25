import s from './conpute.module.scss'
import Menul from '../../components/menuleft/menu'
import { Outlet } from 'react-router-dom'
import { Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
SlackSquareOutlined,
AppstoreOutlined,
DesktopOutlined,
BarChartOutlined,
} from '@ant-design/icons';

const Compute = () => {
        const items = [
  {
    label: '数据库',
    key: 'mail',
    icon: <AppstoreOutlined />,
    theme: 'light',
    children:[
        {
            label: '钻杆（钻杆信息）',
            key: '/index/basicinfo',
        },
        {
            label: '钻头（钻头信息）',
            key: '/index/design'
        }
    ]
  },
  {
    label: '单井配置',
    key: '/execute/condition',
    icon: <DesktopOutlined />,
  },
  {
    label: '工程计算',
    key: '/compute/calcu',
    icon: <BarChartOutlined />,
  }]
    const navigate = useNavigate()
    const onClick = (e) => {
    console.log('click ', e.key)
    navigate(e.key)}
    return(
                <div className={s.all}>
            <div className={s.top}>            
                <div className={s.logo}>DRILL</div>
                <Menu onClick={onClick} mode="horizontal" items={items} className={s.menue} theme='dark'/>
                </div>
            <div className={s.topmenu}>
                <div className={s.stack}><SlackSquareOutlined />工程计算</div>
            </div>
            <div className={s.main}>
                <Menul></Menul>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Compute