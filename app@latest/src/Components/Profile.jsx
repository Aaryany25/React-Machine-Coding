import React from 'react'
import Button from './Button'

function Profile({data ,setData}) {
    const {name,age,email} = data
    const handleSetData = (e,item)=>{
setData(prev=>({
    ...prev,
    [item]:e.target.value,

}))
    }
  return (
    <div className=' border w-[80%]  rounded-lg p-8 mt-3'>
      <div>
        <label >Name:</label>
        <input type="text" name="" id="" value={name} onChange={(e)=>handleSetData(e,'name')} className="border ml-2 px-2" />
      </div>
        <div>
        <label >Age:</label>
        <input type="text" name="" id="" value={age} onChange={(e)=>handleSetData(e,"age")} className="border ml-2 px-2"/>
      </div>
        <div>
        <label >Email:</label>
        <input type="text" name="" id="" value={email} onChange={(e)=>handleSetData(e,"email") }   className="border ml-2 px-2"
/>
      </div>
    </div>
  )
}

export default Profile
