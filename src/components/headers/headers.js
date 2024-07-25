import s from './headers.module.scss'
import {
    EnvironmentOutlined,
    HddOutlined,
    ControlOutlined,
    GitlabOutlined
} from '@ant-design/icons';
import {
    useNavigate,
} from 'react-router-dom'
const Headers = () => {
    const navigate = useNavigate()
    function navi() {
        navigate('/index/design')
    }
    function navi2() {
        navigate('/drill')
    }
    return (
        <div className={s.all}>
            <div className={s.logo}><GitlabOutlined className={s.logoa}/>DRILL</div>
            <div className={s.cate}>
                <div className={s.cates} onClick={navi}><EnvironmentOutlined />数据库</div>
                <div className={s.cates1}><HddOutlined />单井配置</div>
                <div className={s.cates} onClick={navi2}><ControlOutlined />工程计算</div>
            </div>
        </div>
    )
}
export default Headers