import s from './design.module.scss'
import { Select, Input } from 'antd';
import {
    LinuxOutlined,
    OpenAIOutlined,
    LockOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
} from '@ant-design/icons';
const Design = () => {
    const array = [1,2,3,4,5]
    return (
        <div className={s.all}>
        <div className={s.toptext}>
            <div className={s.text}>设计方案</div>
            <div className={s.search}>
                    <Select
      defaultValue="所有油田公司"
      className={s.select}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
      ]}
    />
    <Select
      defaultValue="所有区块"
      className={s.select}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
      ]}
    />
    <Select
      defaultValue="所有类型"
      className={s.select}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
      ]}
    />
     <Input placeholder="输入井号过滤" className={s.input} />
            </div>
        </div>
        <div className={s.mode}>
            {array.map(()=>{
                return (<div className={s.smode}>
                <div className={s.sm}>
                    <div className={s.iconbig}>
                        <LinuxOutlined />
                    </div>
                    <div className={s.name}>
                        <div className={s.nameposi}>MX022-H28</div>
                    </div>
                    <div className={s.endname}><OpenAIOutlined /></div>
                </div>
                <div className={s.midline}></div>
                <div className={s.xm}>
                    <div className={s.xmicon}>
                        <div className={s.singleicon}>
                            <DeleteOutlined />
                        </div>
                        <div className={s.singleicon}>
                            <LockOutlined />
                        </div>
                    </div>
                </div>
            </div>)
            })}
            <div className={s.smode}>
                <div className={s.add}>
                    <PlusCircleOutlined />
                </div>
            </div>
        </div>
    </div>
    )
}
export default Design