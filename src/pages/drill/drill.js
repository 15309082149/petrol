import s from './drill.module.scss'
import { Input,Select, Button } from 'antd';
import Pie from '../../components/pie/pie'
import {
    PlusCircleOutlined,
    FormOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
const Drill = () => {
    const array1 = [1,2,3,4,5]
    const array = [1,2,3,4,5,6,7]
    return (
        <div className={s.all}>
            <div className={s.top}>
                <div className={s.toptext}>钻具组合</div>
            </div>
            <div className={s.leftarea}>
                <img src="https://img.picui.cn/free/2024/07/16/66962103e8a22.png" alt="1" />
            </div>
            <div className={s.rightarea}>
                <div className={s.cate}>
                    <div className={s.scate1}>钻具组合配置</div>
                    <div className={s.scate}>施工参数属性</div>
                    <div className={s.scate}>定向能力参数</div>
                </div>
                <div className={s.mode}>
                    {array.map(()=>{
                        return(
                            <div className={s.smode}>
                        <div className={s.leftimg}><img src="https://img.picui.cn/free/2024/07/16/669624752e386.png" alt="1"></img></div>
                        <div className={s.righttext}>螺杆钻具</div>
                    </div>
                        )
                    })}
                </div>
                <div className={s.bottoml}>
                    <div className={s.bottomltop}>
                        <div className={s.blttext}>钻头属性</div>
                    </div>
                    <div className={s.bottomlleft}>
                        <div className={s.inputz}>
                            显示名称:<Select className={s.input} defaultValue='111'></Select>
                        </div>
                        <div className={s.inputz}>
                            钻头长度:<Select className={s.input} defaultValue='0.32'></Select><Select className={s.unit} placeholder="mm" variant='filled'></Select>
                        </div>
                        <div className={s.inputz}>
                            切削深度:<Select className={s.input} defaultValue='0.0'></Select><Select className={s.unit} placeholder="mm" variant='filled'></Select>
                        </div>
                        <div className={s.inputz}>
                            抬头直径:<Input className={s.input} placeholder='250.8' variant='filled'></Input><Select className={s.unit} placeholder="mm" variant='filled'></Select>
                        </div>
                        <div className={s.inputz}>
                            钻头型号:<Select className={s.input} defaultValue='SST516ZX'></Select>
                        </div>
                        <div className={s.inputz}>
                            钻头类型:<Select className={s.input} defaultValue='PDC'></Select>
                        </div><div className={s.inputz}>
                            切削尺尺寸:<Select className={s.input} defaultValue='16.0'></Select><Select className={s.unit} placeholder="mm" variant='filled'></Select>
                        </div><div className={s.inputz}>
                            制造商:<Select className={s.input} defaultValue='海博瑞'></Select>
                        </div><div className={s.inputz}>
                            序列号:<Select className={s.input} defaultValue='ECA525'></Select>
                        </div>
                    </div>
                    <div className={s.bottomlright}>
                        <div className={s.inputz}>
                            刀翼数:<Select className={s.input} defaultValue='5'></Select>bladers
                        </div>
                        <div className={s.inputz}>
                            刀翼宽度:<Select className={s.input} defaultValue='45.0'></Select><Select className={s.unit} placeholder="mm" variant='filled'></Select>
                        </div>
                        <div className={s.inputz}>
                            本体直径:<Select className={s.input} defaultValue='178.0'></Select><Select className={s.unit} placeholder="mm" variant='filled'></Select>
                        </div>
                        <div className={s.inputz}>
                            排屑槽面积:<Select className={s.input} defaultValue='16325.28'></Select><Select className={s.unit} placeholder="mm" variant='filled'></Select>
                        </div>
                        <div className={s.inputz}>
                            排屑槽面积比例:<Select className={s.input} defaultValue='33.04' variant='filled'></Select>
                        </div>
                        <Pie></Pie>
                    </div>
                </div>
                <div className={s.bottomright}>
                    <div className={s.bottomltop}>
                        <div className={s.blttext}>过钻头压降</div>
                    </div>
                    <div className={s.sec}>
                        <div className={s.secinput}>
                            固定压降&nbsp; <Input className={s.secinput1}></Input>
                        </div>
                        <div className={s.secinput}>
                            总流面积&nbsp; <Input className={s.secinput1}></Input>
                        </div>
                        <Button className={s.button}><PlusCircleOutlined />新增</Button>
                    </div>
                    <table border="1" className={s.table}>
                        <tr className={s.tr}>
                            <th><FormOutlined />&nbsp;&nbsp;喷嘴数量</th>
                            <th><FormOutlined />&nbsp;&nbsp;喷嘴直径</th>
                            <th><FormOutlined />&nbsp;&nbsp;操作</th>
                        </tr>
                        <tr className={s.tr1}>
                            <td>7</td>
                            <td>20</td>
                            <td><DeleteOutlined /></td>
                        </tr>
                    </table>
                    <table className={s.table1} border="1">
                        <tr className={s.tr}>
                            <th>排量<Select className={s.select} defaultValue="L/s" variant='filled'></Select></th>
                            <th>钻头压降<Select className={s.select} defaultValue="Mpa" variant='filled'></Select></th>
                            <th>比水功率 hp/in^2</th>
                        </tr>
                        {array1.map(()=>{
                            return(
                        <tr className={s.tr1}>
                            <td>35.0</td>
                            <td>0.4</td>
                            <td>0.25</td>
                        </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Drill