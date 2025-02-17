import React from 'react';
import Skills from './Skills';
import '../CardProfile.css';
import img from '../assets/images/image.jpeg'; 


const CardProfile = () => {
  
  return (
   <div className='card'>
      <span className=' pro inline-block bg-warning mt-3 text-center '>Pro</span>
      <div>
      <img src={img} alt="ff" /> 
      </div>
       <h1>Ricky Park</h1>
       <p>New York</p>
       <p className="text-gray-300 text-sm mb-4">
          User interface designer and<br />
          front-end developer
        </p>
        <div className=" flex text-center">
          <button className=" flex-1 bg-primary text-white py-2 px-4  rounded ">
            Message
          </button>
          <button className="flex-1 border  py-2 px-4 rounded ">
            Following
          </button>
        </div>
        <Skills />
      
    
   </div>
  
   
  )
};

export default CardProfile;