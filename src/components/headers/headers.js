import s from './headers.module.scss'
import {
    EnvironmentOutlined,
    HddOutlined,
    ControlOutlined,
    FieldTimeOutlined,
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
                <div className={s.cates} onClick={navi}><EnvironmentOutlined />方案优化</div>
                <div className={s.cates1}><HddOutlined />现场作业</div>
                <div className={s.cates} onClick={navi2}><ControlOutlined />钻后分析</div>
                <div className={s.cates}><FieldTimeOutlined />时间数据</div>
            </div>
        </div>
    )
}
export default Headers