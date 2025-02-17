/*import React from 'react';
import { useContext ,useState } from 'react';
import {Data ,Data1}  from '../App';
//useContext

   const ComA = () => {
     const userName=useContext(Data);
     const Age= useContext(Data1);
   return (
    <div>
      <h1>My name is {userName} and I am {Age} year old</h1>
    </div>
  )
}

export default ComA;


//  context api props drilling
/*import { Data , Data1} from '../App';

const ComA = () => {
  return (
    <Data.Consumer>
        {(name)=>{
           // return <h1> {name} </h1>
           return(
            <Data1.Consumer>
            {(age)=>{
                return <h1> My name is :{name} and I am {age}  yeare old </h1>
                
            }}
           </Data1.Consumer>
           )
        }}
    

    </Data.Consumer>
    );
  
};
 export default ComA;*/

          
 