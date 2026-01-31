import React, { useState } from 'react'
import Button from './Button'
import Profile from './Profile'
import Interest from './Interest'
import Setting from './Setting'
function TabForm() {
    const [data, setdata] = useState({
        name:"",
        age:'',
        email:"",
        // interest:[],
        // theme:"dark"
    })
    const [Active, setActive] = useState(0)
const tabs =[
{name:"Profile",component:Profile},
{name:"Interest",component:Interest},
{name:"Setting",component:Setting}
]
const ActiveComponent = tabs[Active].component
  return (
    <div className=' p-[2vw]'>
       <h1 className='font-semibold text-xl mb-8'>Tab Form</h1> 
        <div className='flex gap-3'>
            {tabs.map((tab,index)=>{
                 return <Button key={index} name={tab.name} onClick={()=>setActive(index)}/>
            })}
        </div>
<div>
    {/* {ActiveComponent}
     */}
     <ActiveComponent data={data} setData={setdata}/>
</div>
    </div>
  )
}

export default TabForm
