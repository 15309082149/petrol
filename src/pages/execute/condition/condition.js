import s from './condition.module.scss'
import { Select, Input } from 'antd';
import {
BoldOutlined,
LockOutlined,
PartitionOutlined,
ToolOutlined,
PlusCircleOutlined,
DeleteOutlined,
EyeOutlined,
InteractionOutlined,
} from '@ant-design/icons';
const Condition = () => {
    const arrry = [1,2,3,4,5,6]
    return (
                <div className={s.all}>
        <div className={s.toptext}>
            <div className={s.text}>工况总览</div>
            <div className={s.search}>
                    <Select
      defaultValue="父井筒"
      className={s.select}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
      ]}
    />
    <Select
      defaultValue="接入深度"
      className={s.select}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
      ]}
    />
    <Select
      defaultValue="类型"
      className={s.select}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
      ]}
    />
     <Input placeholder="主井筒" className={s.input} />
            </div>
        </div>
        <table border='1' className={s.tab}>
            <tr>
                <th>开次</th>
                <th>施工步骤</th>
                <th className={s.tooicon}>趟钻序列</th>
                <th>详细工况</th>
                <th className={s.reducew}>开始钻头深度</th>
                <th>结束钻头深度</th>
                <th>开始井深</th>
                <th>结束井深</th>
                <th>开始时间</th>
                <th>结束时间</th>
                <th>操作</th>

            </tr>
            <tr>
                <td rowSpan={18}>Intermediate Cating</td>
                <td rowSpan={18}>250.8mm裸眼钻进</td>
                <td rowSpan={15}>第4掘钻&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className={s.tdicon}>
                    <BoldOutlined  className={s.letterspace}/>
                    <LockOutlined className={s.iconcolor}/>
                    <PartitionOutlined className={s.letterspace}/>
                    <ToolOutlined className={s.letterspace}/>
                    <PlusCircleOutlined className={s.letterspace}/>
                    <DeleteOutlined className={s.letterspace}/>
                    </div>
                    </td>
                <td colSpan={8}>石碳系，塔里木组</td>
            </tr>
            {arrry.map(()=>{
                return (
                    <tr>
                <td>下钻</td>
                <td>0</td>
                <td>4418.16</td>
                <td>4437.03</td>
                <td>4437.03</td>
                <td>2024-03-31 08:52:06</td>
                <td>2024-04-01 07:51:45</td>
                <td className={s.optionall}>
                    <EyeOutlined className={s.op}/>
                    <InteractionOutlined className={s.op}/>         
                </td>
            </tr>
                )
            })}
            <tr>
                <td colSpan={8} className={s.textcolor}>
                    输入自定义消息
                </td>
            </tr>
            <tr>
                <th colSpan={3}>起钻原因</th>
                <th colSpan={2}>层校</th>
                <th>趟钻进尺(m)</th>
                <th colSpan={2}>平均机械钻速(m/hr)</th>
            </tr>
            {arrry.map(()=>{
                return (
                    <tr>
                <td>起钻</td>
                <td>7742.24</td>
                <td>1992.03</td>
                <td>7763</td>
                <td>7763</td>
                <td>2024-04-20 05:21:42</td>
                <td>2024-04-21 06:40:57</td>
                <td className={s.optionall}>
                    <EyeOutlined className={s.op}/>
                    <InteractionOutlined className={s.op}/>
                </td>

            </tr>
                )
            })}

        </table>
        </div>
    )
}
export default Condition