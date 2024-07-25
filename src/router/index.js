import Index from '../pages/index/index'
import Execute from '../pages/execute/execute'
import Drill from '../pages/drill/drill'
import Design from '../pages/index/design/design'
import Condition from '../pages/execute/condition/condition'
import Basicinfo from '../pages/index/basicinfo/basicinfo'
import Compute from '../pages/compute/compute'
import Calcu from '../pages/compute/calcu/calcu'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
   {path:'',element:<Index />},
   {path: '/index', element:<Index />, children:[
    {path:'design', element:<Design />},
    {path:'basicinfo', element:<Basicinfo />}
   ]},
   {path: '/execute', element:<Execute />, children:[
      {path:'condition', element: <Condition />}
   ]},
   {path: '/drill', element:<Drill />},
   {path: '/compute', element: <Compute />, children: [
      {path: 'calcu', element: <Calcu />}
   ]}
])
export default router