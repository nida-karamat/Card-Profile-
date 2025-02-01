/*import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount]=useState(0);
    const increment=()=>{
        setCount(count + 1);
    } 
    const decrement=()=>{
        setCount(count - 1);
    } 
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>click</button> <br />
        <button onClick={decrement}>click</button>
    </div>
  )
}

export default UseState;*/

// add new friend
/*import React, { useState } from 'react'

 const UseState = () => {
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

export default UseState;*/


// movies
/*import React, { useState } from 'react'

 const UseState = () => {
    const [movie,setMovie]=useState({
        title:'beauty and beast',
        rating:6,
    })
    const onUpadateMovie =()=>{
       setMovie({...movie ,rating:5});
    }
  return (
    <div>
      <h1>{movie.title}</h1>
      <h1>{movie.rating}</h1>
      <button onClick={onUpadateMovie}>Update Rating</button>
     </div>
  )
}
export default UseState;*/

import React from 'react'

 const UseState = ({count,onChangeHandle}) => {
    const onHandler=()=> onChangeHandle();

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={onHandler}>increment</button>
    </div>
  )
}
  export default UseState;