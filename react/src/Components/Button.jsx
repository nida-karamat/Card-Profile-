import React from 'react'

 const Button = () => {
    const handlerClick =()=>{

        console.log(Math.round(Math.random()*10));
    }
    const copy=()=>{
        console.log('copy content');
    }
    const moveHandle=()=>{
        alert('Move Mouse');
        console.log('Mouse move event');
    }

  return(
    <div>
        <button onClick={handlerClick}> Click me</button>
        <p onCopy={copy} onMouseMove={moveHandle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum odio assumenda tempora omnis amet, nostrum beatae culpa ad consectetur harum.</p>
    </div>
  );
  
}
 export default Button;