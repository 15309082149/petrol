import s from './drill.module.scss'
import { Input, Select, Button } from 'antd';
import Pie from '../../components/pie/pie'
import {
    PlusCircleOutlined,
    FormOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import qs from 'qs'
 import React, { useRef, useState } from 'react'
import axios from 'axios'
const Drill = () => {
    const dn = useRef(null)
    const q = useRef(null)
    const [data,setdata] = useState([])
    async function oper() {
        console.log(dn.current.input.value)
        await axios.get('http://localhost:8080/calc',{
            params: {
                Dn:dn.current.input.value.split(","),
                Q:q.current.input.value.split(",")
            },
            paramsSerializer: function (params) {
                return qs.stringify(params, { arrayFormat: "repeat"});
            }
        }

        ).then(result => {
            setdata(result.data.data)
            console.log(data)
        })
    }
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
                        <div className={s.inputz}>
                            钻头水力参数计算
                        </div>
                        <div className={s.inputz}>
                            水眼号数:<Input className={s.input} ref={dn}></Input>
                        </div>
                        <div className={s.inputz}>
                            排量:<Input className={s.input} ref={q}></Input>&nbsp;&nbsp;&nbsp;<Button className={s.button1} onClick={oper}>计算</Button>
                        </div>
                        <div className={s.inputz}>
                            计算结果
                        </div>
                        <div className={s.inputz}>
                            钻头比水功率:{data.nc && data.nc[0].toFixed(2)}&nbsp;{data.nc && data.nc[1].toFixed(2)}&nbsp;{data.nc && data.nc[2].toFixed(2)}&nbsp;{data.nc && data.nc[3].toFixed(2)}&nbsp;{data.nc && data.nc[4].toFixed(2)}
                        </div>
                        <div className={s.inputz}>
                            钻头压降:{data.pb && data.pb[0].toFixed(2)}&nbsp;{data.pb && data.pb[1].toFixed(2)}&nbsp;{data.pb && data.pb[2].toFixed(2)}&nbsp;{data.pb && data.pb[3].toFixed(2)}&nbsp;{data.pb && data.pb[4].toFixed(2)}
                        </div>
                        <div className={s.inputz}>
                            射流速度:{data.v0 && data.v0[0].toFixed(2)}&nbsp;{data.v0 && data.v0[1].toFixed(2)}&nbsp;{data.v0 && data.v0[2].toFixed(2)}&nbsp;{data.v0 && data.v0[3].toFixed(2)}&nbsp;{data.v0 && data.v0[4].toFixed(2)}
                        </div>
                        <div className={s.inputz}>
                            射流冲击力:{data.fj && data.fj[0].toFixed(2)}&nbsp;{data.fj && data.fj[1].toFixed(2)}&nbsp;{data.fj && data.fj[2].toFixed(2)}&nbsp;{data.fj && data.fj[3].toFixed(2)}&nbsp;{data.fj && data.fj[4].toFixed(2)}
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
                        <div className={s.inputz}>
                            射流冲击力:{data.nj && data.nj[0].toFixed(2)}&nbsp;{data.nj && data.nj[1].toFixed(2)}&nbsp;{data.nj && data.nj[2].toFixed(2)}&nbsp;{data.nj && data.nj[3].toFixed(2)}&nbsp;{data.nj && data.nj[4].toFixed(2)}
                        </div>
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