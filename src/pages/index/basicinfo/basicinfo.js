import s from './basicinfo.module.scss'
import { Button } from 'antd';
import
{ Input }
from
"antd"
;
import { Pagination,Modal,Form } from 'antd';
import request from '../../../utils/request'
import React, { useState,useRef,useEffect  } from 'react';
const Basicinfo = () => {
    const innerDiameter = useRef(null)
    const interfaceInnerDiameter = useRef(null)
    const interfaceOuterDiameter = useRef(null)
    const openingDisplacement = useRef(null)
    const outerDiameter = useRef(null)
    const steelGrade = useRef(null)
    const volume = useRef(null)
    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    request.post('/ndrill/add',{
        data:{
            innerDiameter: Number(innerDiameter.current.input.value),
            interfaceInnerDiameter: Number(interfaceInnerDiameter.current.input.value),
            interfaceOuterDiameter: Number(interfaceOuterDiameter.current.input.value),
            openingDisplacement: Number(openingDisplacement.current.input.value),
            outerDiameter:Number(outerDiameter.current.input.value),
            steelGrade: steelGrade.current.input.value,
            volume: Number(volume.current.input.value)
        }
  }).then(result=>{
        console.log(result)
    })
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
    function onchange (e) {
            request.get(`/ndrill/selectPage?pageNum=${e}&pageSize=20`).then(result=>{
        setarray(result.data.data.list)
    })
    }
    const [array,setarray] = useState([])
    useEffect(()=>{
    request.get('/ndrill/selectPage?pageNum=1&pageSize=20').then(result=>{
        setarray(result.data.data.list)
    })
    },[])
    const input = useRef(null)
    async function oper() {
        if(input.current.input.value === '')
        {
            return 
        }
    await request.get('/ndrill/selectAll',
        {
            params:{
                innerDiameter:input.current.input.value
            }
        }
    ).then(result=>{
        if(result.data.data.length === 0)
        {
            console.log('null')
        }
        setarray(result.data.data)
    })
    }
    return (
        <div className={s.all}>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}

    autoComplete="off"
  >
    <Form.Item
      label="公称内径"
      name="innerDiameter"
      rules={[
        {
          required: true,
          message: 'Please input username!',
        },
      ]}
    >
      <Input ref={innerDiameter}/>
    </Form.Item>

    <Form.Item
      label="接头内径"
      name="interfaceInnerDiameter"
      rules={[
        { 
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input ref={interfaceInnerDiameter}/>
    </Form.Item>
        <Form.Item
      label="公称外径"
      name="interfaceOuterDiameter"
      rules={[
        { 
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input ref={interfaceOuterDiameter}/>
    </Form.Item>
        <Form.Item
      label="开端排量"
      name="openingDisplacement"
      rules={[
        { 
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input ref={openingDisplacement}/>
    </Form.Item>
        <Form.Item
      label="公称外径"
      name="outerDiameter"
      rules={[
        { 
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input ref={outerDiameter}/>
    </Form.Item>
        <Form.Item
      label="钢级"
      name="steelgrade"
      rules={[
        { 
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input ref={steelGrade}/>
    </Form.Item>
        <Form.Item
      label="容积"
      name="volume"
      rules={[
        { 
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input ref={volume}/>
    </Form.Item>


    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
    </Form.Item>
  </Form>
      </Modal>
            <div className={s.toptext}>
                <div className={s.text}>基本信息</div>
                <div className={s.search}>
                </div>
            </div>
            <div className={s.form}>
                <div className={s.formtopb}>
                <Button className={s.button} onClick={showModal}>增加钻杆</Button>
                <Input className={s.input} placeholder='输入内径' ref={input}></Input>
                <Button className={s.button} onClick={oper}>搜索</Button>
                </div>
                <div className={s.tablez}>
                    <table className={s.table} border='1'>
                        <tr>
                            <th>钢级</th>
                            <th>公称内径 mm</th>
                            <th>外径 mm</th>
                            <th>接头外径 mm</th>
                            <th>接头内径 mm</th>
                            <th>开端排量 L/m</th>
                            <th>容积 L/m</th>
                        </tr>
                        {array && array.map((item)=>{
                            return(
                                <tr>
                                    <td>{item.steelGrade}</td>
                                    <td>{item.innerDiameter}</td>
                                    <td>{item.outerDiameter}</td>
                                    <td>{item.interfaceOuterDiameter}</td>
                                    <td>{item.interfaceInnerDiameter}</td>
                                    <td>{item.openingDisplacement}</td>
                                    <td>{item.volume}</td>
                                </tr>
                            )
                        })
                    }
                    </table>
                    <Pagination defaultCurrent={1} total={20}  className={s.pagi} onChange={onchange}/>
                </div>
            </div>
        </div>

    )
}
export default Basicinfo