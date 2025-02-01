import React, { useEffect, useState } from 'react'

const StateExample = () => {
    const [count ,setCount]=useState(()=>{
        const initailized = 10;
        return initailized;
    })

    useEffect(()=>{

    
     console.log("jijsd");
} ,[])
        const changeHandle=()=> setCount((prevCount)=> prevCount+1)
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={changeHandle}>increment</button>

    </div>
  )
}

export default StateExample;

/*import React, { useEffect, useState } from 'react'

 const StateExample = () => {
    const [name, setName]= useState(()=>{
        const savedName= localStorage.getItem('name');
        return savedName ? ndia.parse(savedName) :"";
    })
    
    
    const handleChange=(event)=>{
      setName(event.target.value);

    }
    const handelClear =()=>setName("");
  return (
    <div>
        <h1> your name:{name}</h1>
        <input type='text' value={name} onChange={handleChange} placeholder='enter your name'/>
        <button onClick={handelClear}>Clear Name</button>
    </div>
  )
}
export default StateExample;*/
