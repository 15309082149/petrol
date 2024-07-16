import { useEffect } from 'react';
import s from './pie.module.scss'
import * as echarts from 'echarts';
const Pie = () => {
    useEffect(()=>{
         var myChart = echarts.init(document.getElementById('main'));
    var option = {
  title: {
    text: '',
    left: 'center',
    top: 'center'
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: '排屑槽面积'
        },
        {
          value: 234,
          name: '本体直径'
        },
        {
          value: 1548,
          name: '钻头长度'
        }
      ],
      radius: ['40%', '70%']
    }
  ]
};
myChart.setOption(option);
    })

    return (
        <div id="main" className={s.pie}></div>
    )
}

export default Pie