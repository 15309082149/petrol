import s from './condition.module.scss'
import { Button, Input } from 'antd';
import {

} from '@ant-design/icons';
const Condition = () => {
    return (
                <div className={s.all}>
        <div className={s.toptext}>
            <div className={s.text}>单井配置</div>
            
        </div>
        <div className={s.form}>
            <div className={s.inputz}>
                <Input className={s.input}></Input>
                <Button className={s.button}>确认</Button>
            </div>
            <div className={s.mid}>
                <div className={s.left}>
                    <div className={s.midtop}>
                        <div className={s.midtoptext}>井身结构</div>
                    </div>
                    <div className={s.midmid}>
                        <table className={s.table} border='1'>
                            <tr>
                                <th className={s.title}>开钻次序</th>
                                <th>井深 m</th>
                                <th>钻头尺寸 mm</th>
                                <th>套管尺寸 mm</th>
                                <th>套管程序</th>
                                <th>套管下入地层层位</th>
                                <th>套管下入深度 m</th>
                                <th>水泥返高 m</th>
                            </tr>
                            <tr>
                                <td contentEditable='true'>一开</td>
                                <td contentEditable='true'>50</td>
                                <td contentEditable='true'>660.4</td>
                                <td contentEditable='true'>508</td>
                                <td contentEditable='true'>导管</td>
                                <td contentEditable='true'>沙二段</td>
                                <td contentEditable='true'>50</td>
                                <td contentEditable='true'>地面</td>
                            </tr>
                            <tr>
                                <td contentEditable='true'>二开</td>
                                <td contentEditable='true'>700</td>
                                <td contentEditable='true'>444.5</td>
                                <td contentEditable='true'>365.13</td>
                                <td contentEditable='true'>表层导管</td>
                                <td contentEditable='true'>沙二段</td>
                                <td contentEditable='true'>698</td>
                                <td contentEditable='true'>地面</td>
                            </tr>
                            <tr>
                                <td contentEditable='true'>三开</td>
                                <td contentEditable='true'>3200</td>
                                <td contentEditable='true'>333.4</td>
                                <td contentEditable='true'>282.58</td>
                                <td contentEditable='true'>级数套管</td>
                                <td contentEditable='true'>嘉二亚段</td>
                                <td contentEditable='true'>3198</td>
                                <td contentEditable='true'>地面</td>
                            </tr>
                            <tr>
                                <td contentEditable='true' rowSpan={2}>四开</td>
                                <td contentEditable='true' rowSpan={2}>5281</td>
                                <td contentEditable='true' rowSpan={2}>241.3</td>
                                <td contentEditable='true'>177.8</td>
                                <td contentEditable='true'>油层回接</td>
                                <td contentEditable='true' rowSpan={2}>灯四段顶</td>
                                <td contentEditable='true'>0~2798</td>
                                <td contentEditable='true'>地面</td>
                            </tr>
                            <tr>
                                <td contentEditable='true'>177.8</td>
                                <td contentEditable='true'>油层悬挂</td>
                                <td contentEditable='true'>2798~5279</td>
                                <td contentEditable='true'>2698</td>
                            </tr>
                            <tr>
                                <td contentEditable='true'>五开</td>
                                <td contentEditable='true'>6645</td>
                                <td contentEditable='true'>149.2</td>
                                <td contentEditable='true' colSpan={5}>裸眼完井</td>
                            </tr>

                        </table>
                    </div>
                </div>
                <div className={s.line}></div>
                <div className={s.right}>
                    <div className={s.midtop}>
                        <div className={s.midtoptext}>钻具组合</div>
                    </div>
                    <div className={s.midmid}>
                        <div className={s.mode}>
                            <div className={s.smode}>钻杆</div>
                            <div className={s.smode}>加重钻杆</div>
                            <div className={s.smode}>扶正器</div>
                            <div className={s.smode}>钻链</div>
                            <div className={s.smode}>螺杆</div>
                            <div className={s.smode}>套管</div>
                            <div className={s.smode}>钻头</div>
                        </div>
                        <table className={s.table} border='1'>
                            <tr>
                                <th className={s.title}>名称</th>
                                <th>搜索栏</th>
                                <th>型号</th>
                                <th>外径(mm)</th>
                                <th>内径(mm)</th>
                                <th>线重(kg/m)</th>
                                <th>长度(m)</th>
                            </tr>
                            <tr>
                                <th contentEditable='true'>钻杆</th>
                                <th contentEditable='true'>搜索</th>
                                <td contentEditable='true'>G105</td>
                                <td contentEditable='true'>60.3</td>
                                <td contentEditable='true'>46.1</td>
                                <td contentEditable='true'>11.0</td>
                                <td contentEditable='true'>7.11</td>
                            </tr>
                            <tr>
                                <th contentEditable='true'>加重钻杆</th>
                                <th contentEditable='true'>搜索</th>
                                <td contentEditable='true'>G105</td>
                                <td contentEditable='true'>60.3</td>
                                <td contentEditable='true'>46.1</td>
                                <td contentEditable='true'>11.0</td>
                                <td contentEditable='true'>7.11</td>
                            </tr>
                            <tr>
                                <th contentEditable='true'>扶正器</th>
                                <th contentEditable='true'>搜索</th>
                                <td contentEditable='true'>G105</td>
                                <td contentEditable='true'>60.3</td>
                                <td contentEditable='true'>46.1</td>
                                <td contentEditable='true'>11.0</td>
                                <td contentEditable='true'>7.11</td>
                            </tr>
                            <tr>
                                <th contentEditable='true'>钻链</th>
                                <th contentEditable='true'>搜索</th>
                                <td contentEditable='true'>G105</td>
                                <td contentEditable='true'>60.3</td>
                                <td contentEditable='true'>46.1</td>
                                <td contentEditable='true'>11.0</td>
                                <td contentEditable='true'>7.11</td>
                            </tr>
                            <tr>
                                <th contentEditable='true'>螺杆</th>
                                <th contentEditable='true'>搜索</th>
                                <td contentEditable='true'>G105</td>
                                <td contentEditable='true'>60.3</td>
                                <td contentEditable='true'>46.1</td>
                                <td contentEditable='true'>11.0</td>
                                <td contentEditable='true'>7.11</td>
                            </tr>
                            <tr>
                                <th contentEditable='true'>钻头</th>
                                <th contentEditable='true'>搜索</th>
                                <td contentEditable='true'>G105</td>
                                <td contentEditable='true'>60.3</td>
                                <td contentEditable='true'>46.1</td>
                                <td contentEditable='true'>11.0</td>
                                <td contentEditable='true'>7.11</td>
                            </tr>
                        </table>
                        </div>
                </div>
            </div>
        </div>
    
        </div>
    )
}
export default Condition