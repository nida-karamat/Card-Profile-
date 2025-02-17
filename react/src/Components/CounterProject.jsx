/*import React from 'react'
import { useState    } from 'react';
//import '../style.css';

 const CounterProject = () => {
  const [count,setCount]=useState(0);
  const increment=()=> setCount(count+1);
  const decrement=()=> setCount(count-1);
  return (
  <div className='container' style= {{backgroundColor:'brown', height:'100px', width:'100px', marginTop:'10px', borderRadius:'5px'}}> 
      <div>
      <h1 className='number'>{count}</h1>
      </div>

      <div className="btn-container">
        <button onClick={increment} className="increment">+</button>
       
        <button onClick={decrement} className="decrement" style={{marginLeft:'20px',}}>-</button>
        
        </div>
        
       
    </div>
  )
}

export default CounterProject;*/


import React, { useState } from 'react'

const  CounterProject= () => {
   const [friend , setFriend] = useState(['nida' ,'amna'])
   const onAddFriend=()=> setFriend([...friend , 'safia'])
   const onRemoveFriend=()=> setFriend(friend.filter((f)=>f!=='amna'))
   const onUpdateFriend=()=> {
       setFriend(friend.map((f) =>(f==='nida'? 'nida karamat' : f)))

   };
 return (
   <div> 
       {friend.map((friend)=>(
           <li key={Math.random()}>{friend}</li>
       ))}
   
       <button onClick={onAddFriend}>Add new friend</button>
       <button onClick={onRemoveFriend}>remove one friend</button>
       <button onClick={onUpdateFriend}>Update one friend</button>
   </div>
 )
}

export default CounterProject;



