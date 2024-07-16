import s from './basicinfo.module.scss'
import { Button } from 'antd';
import
{ Input }
from
"antd"
;
const Basicinfo = () => {
    return (
        <div className={s.all}>
            <div className={s.toptext}>
                <div className={s.text}>基本信息</div>
                <div className={s.search}>
                    <Button className={s.button}>确认</Button>
                </div>
            </div>
            <div className={s.form}>
                <div className={s.formtop}>
                    <div className={s.formtoptext}>基本信息</div>
                </div>
                <div className={s.inputarea}>
                    <div className={s.singleinput}>
                    盆地&nbsp;&nbsp;
                        <Input className={s.input} placeholder='塔里木盆地'></Input>
                    </div>
                    <div className={s.singleinput}>
                    钻井公司&nbsp;&nbsp;
                        <Input className={s.input} placeholder='胜利工程塔六勘'></Input>
                    </div>
                    <div className={s.singleinput}>
                    区块&nbsp;&nbsp;
                        <Input className={s.input} placeholder='顺北油田'></Input>
                    </div>
                    <div className={s.singleinput}>
                    油田公司&nbsp;&nbsp;
                        <Input className={s.input} placeholder='塔里木油田'></Input>
                    </div>

                    <div className={s.singleinput}>
                    井号&nbsp;&nbsp;
                        <Input className={s.input} placeholder='顺中6-2X' variant='filled'></Input>
                    </div>
                    <div className={s.singleinput}>
                    井型&nbsp;&nbsp;
                        <Input className={s.input} placeholder='定向井'></Input>
                    </div>
                    <div className={s.singleinput}>
                    井队&nbsp;&nbsp;
                        <Input className={s.input} placeholder='胜利80013'></Input>
                    </div>
                    <div className={s.singleinput}>
                    设计作业周期&nbsp;&nbsp;
                        <Input className={s.input} placeholder='141'></Input>
                    </div>
                    <div className={s.singleinput}>
                    钻机类型&nbsp;&nbsp;
                        <Input className={s.input} placeholder='陆地' variant='filled'></Input>
                    </div>
                </div>
            </div>
            <div className={s.form}>
                <div className={s.formtop}>
                    <div className={s.formtoptext}>基本信息</div>
                </div>
                <div className={s.inputarea}>
                    <div className={s.singleinput}>
                    井口坐标(X)&nbsp;&nbsp;
                        <Input className={s.input}></Input>
                    </div>
                    <div className={s.singleinput}>
                    井口坐标(Y)&nbsp;&nbsp;
                        <Input className={s.input} ></Input>
                    </div>
                    <div className={s.singleinput}>
                    入靶点A坐标(X)&nbsp;&nbsp;
                        <Input className={s.input}></Input>
                    </div>
                    <div className={s.singleinput}>
                    入靶点A坐标(Y)&nbsp;&nbsp;
                        <Input className={s.input}></Input>
                    </div>

                    <div className={s.singleinput}>
                    地面海拔&nbsp;&nbsp;
                        <Input className={s.input}></Input>
                    </div>
                    <div className={s.singleinput}>
                    完井方式&nbsp;&nbsp;
                        <Input className={s.input} placeholder='请选择'></Input>
                    </div>
                    <div className={s.singleinput}>
                    定稿设计井深&nbsp;&nbsp;
                        <Input className={s.input} placeholder='9120.76' variant='filled'></Input>
                    </div>
                    <div className={s.singleinput}>
                    定稿设计水平段长度&nbsp;&nbsp;
                        <Input className={s.input} placeholder='791.78' variant='filled'></Input>
                    </div>
                    <div className={s.singleinput}>
                    目的层&nbsp;&nbsp;
                        <Input className={s.input} placeholder='鹰山组' variant='filled'></Input>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Basicinfo