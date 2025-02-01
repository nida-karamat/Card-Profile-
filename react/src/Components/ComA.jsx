import { useContext } from 'react';


import { Data , Data1} from '../App';


const ComA = () => {

  const userName=  useContext(Data);
  const Age= useContext(Data1);
  return(

    <h1> 
        MY Name is{userName} and I am {Age} tear old.
    </h1>

  );
  
};
 export default ComA;


 //  context api props drilling
 /*return (
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
          
  }*/