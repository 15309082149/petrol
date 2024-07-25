import s from './design.module.scss'
import { Button } from 'antd';
import
{ Input }
from
"antd"
;
const Design = () => {
    return (
                <div className={s.all}>
            <div className={s.toptext}>
                <div className={s.text}>基本信息</div>
                <div className={s.search}>
                </div>
            </div>
            <div className={s.form}>
                <div className={s.formtopb}>
                <Button className={s.button}>增加钻头</Button>
                <Input className={s.input}></Input>
                <Button className={s.button}>搜索</Button>
                </div>
                <div className={s.tablez}>
                    <table className={s.table} border='1'>
                        <tr>
                            <th>钢级</th>
                            <th>公称外径 mm</th>
                            <th>内径 mm</th>
                            <th>管体壁厚 mm</th>
                            <th>屈服强度 psi</th>
                            <th>接体连接螺纹 扣型</th>
                            <th>公扣根部 直径mm</th>
                            <th>管体内压强度 MPa</th>
                            <th>开端排量 L/m</th>
                            <th>容积 L/m</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Design