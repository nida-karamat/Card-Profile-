import React, { useEffect, useState } from 'react'

export const UseEffect = () => {
     const [count ,setCount]=useState(0)

     useEffect(()=>{
        document.tilie='Count: ${count}' 


     },[count]);
     
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Icrement</button>
    </div>
  )
}

export default UseEffect;
















/*import { useEffect } from "react";

 const UseEffect = () => {

    
    useEffect(()=>{
        console.log("component mounting");
    },[]);

  return (
     <div>
        <h1> check the console to see the message</h1>
     </div>
   

  );
};

export default UseEffect;*/































/*import React, { useState } from 'react'
import { useEffect } from 'react'

const UseEffect = () => {
    const [data ,setData]=useState([])


    useEffect(()=>{
        async function getData(){
           const response= await fetch("https://jsonplaceholder.typicode.com/todos")
           const data= await response.json();
           if(data && data.length) setData(data)  
        }
    getData();

    } , [])

  return (
    <div>
        <ul>

            {data.map(todo =>(
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}



 export default UseEffect;*/
