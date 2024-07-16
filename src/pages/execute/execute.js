import s from './execute.module.scss'
import Headers from '../../components/headers/headers'
import Menus from '../../components/menusec/menus'
import { Outlet } from 'react-router-dom'
import {
SlackSquareOutlined,
} from '@ant-design/icons';
const Execute = () => {
    return (
                <div className={s.all}>
            <Headers className={s.head}></Headers>
            <div className={s.topmenu}>
                <div className={s.stack}><SlackSquareOutlined />方案优化</div>
                </div>
            <div className={s.main}>
                <Menus></Menus>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Execute