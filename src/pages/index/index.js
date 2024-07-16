import s from './index.module.scss'
import Header from '../../components/header/header'
import Menul from '../../components/menuleft/menu'
import { Outlet } from 'react-router-dom'
import {
SlackSquareOutlined,
} from '@ant-design/icons';
const Index = () => {
    return (
        <div className={s.all}>
            <Header className={s.head}></Header>
            <div className={s.topmenu}>
                <div className={s.stack}><SlackSquareOutlined />方案优化</div>
            </div>
            <div className={s.main}>
                <Menul></Menul>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Index