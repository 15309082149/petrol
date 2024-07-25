import s from './calcu.module.scss'
import { Button, Input } from 'antd';
 import React, { useRef, useState } from 'react'
 import request from '../../../utils/request'
 import qs from 'qs'
const Calcu = () => {
    const dn = useRef(null)
    var q = useRef(null)
    const dnn = useRef(null)
    const qn = useRef(null)
    var qq
    var qnq
    const [data,setdata] = useState([])
    async function oper() {
        if(dn.current.input.value === '' ||q.current.input.value === '' || dnn.current.input.value === '' ||qn.current.input.value=== '')
        {
            return 
        }
        qq = Number(q.current.input.value)
        qnq = Number(qn.current.input.value)
        const dna = []
        const qa = []
        for(var i = 0;i<10;i++)
        {
            dna.push(dn.current.input.value)
        }
        for(var j = 0;j<5;j++)
        {
            qa.push(qq)
            qq+=qnq
        }
        console.log(dn.current.input.value)
        await request.get('/api/calculation/calc',{
            params: {
                Dn:dna,
                Q:qa
            },
            paramsSerializer: function (params) {
                return qs.stringify(params, { arrayFormat: "repeat"});
            }
        }

        ).then(result => {
            setdata(result.data.data)
            // console.log(result.data.data)
            console.log(data)
        })}
    return (
       <div className={s.all}>
        <div className={s.toptext}>
            <div className={s.text}>工程计算</div>
            
        </div>
        <div className={s.form}>
            <div className={s.formtop}>钻头水力参数计算</div>
            <div className={s.inputa}>
                <div className={s.inputtext}>输入数据</div>
                水眼号数:<Input className={s.input} ref={dn}></Input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                数量:<Input className={s.input} ref={dnn}></Input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                排量初始值：<Input className={s.input} ref={q}></Input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                向上差值：<Input className={s.input} ref={qn}></Input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className={s.button} onClick={oper}>计算</Button>
            </div>
            <div className={s.outa}>
                <div className={s.inputtext1}>输出数据</div>
                <div className={s.result}>
                    <table className={s.table} border='1'>
                        <tr>
                            <th className={s.height}>比水功率Nc</th>
                            <th>钻头压降Pb</th>
                            <th>射流速度V0</th>
                            <th>射流冲击力Fj</th>
                            <th>射流水功率Nj</th>
                        </tr>
                        <tr>
                            <td>{data.nc && data.nc[0].toFixed(5)}</td>
                            <td>{data.pb && data.pb[0].toFixed(5)}</td>
                            <td>{data.v0 && data.v0[0].toFixed(5)}</td>
                            <td>{data.fj && data.fj[0].toFixed(5)}</td>
                            <td>{data.nj && data.nj[0].toFixed(5)}</td>
                        </tr>
                        <tr>
                            <td>{data.nc && data.nc[1].toFixed(5)}</td>
                            <td>{data.pb && data.pb[1].toFixed(5)}</td>
                            <td>{data.v0 && data.v0[1].toFixed(5)}</td>
                            <td>{data.fj && data.fj[1].toFixed(5)}</td>
                            <td>{data.nj && data.nj[1].toFixed(5)}</td>
                        </tr>
                        <tr>
                            <td>{data.nc && data.nc[2].toFixed(5)}</td>
                            <td>{data.pb && data.pb[2].toFixed(5)}</td>
                            <td>{data.v0 && data.v0[2].toFixed(5)}</td>
                            <td>{data.fj && data.fj[2].toFixed(5)}</td>
                            <td>{data.nj && data.nj[2].toFixed(5)}</td>
                        </tr>
                        <tr>
                            <td>{data.nc && data.nc[3].toFixed(5)}</td>
                            <td>{data.pb && data.pb[3].toFixed(5)}</td>
                            <td>{data.v0 && data.v0[3].toFixed(5)}</td>
                            <td>{data.fj && data.fj[3].toFixed(5)}</td>
                            <td>{data.nj && data.nj[3].toFixed(5)}</td>
                        </tr>
                        <tr>
                            <td>{data.nc && data.nc[4].toFixed(5)}</td>
                            <td>{data.pb && data.pb[4].toFixed(5)}</td>
                            <td>{data.v0 && data.v0[4].toFixed(5)}</td>
                            <td>{data.fj && data.fj[4].toFixed(5)}</td>
                            <td>{data.nj && data.nj[4].toFixed(5)}</td>
                        </tr>

                    </table>
                </div>
            </div>
            </div>

            </div>
    )
}

export default Calcu