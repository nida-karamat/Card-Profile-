import React from 'react'
import { FaSearch } from 'react-icons/fa';
 const HiddenSearchBarP = () => {

    const [showInput ,setShowInput]=useState(false) 
    const [bgColor ,setBgColor] =useState('white')
  return (
    
    <section className='container' style={{backgroundColor}} onClick={handleClick}>
        {showInput ? (
            <input type="text" placeholder='Search...' />

        ):(
            <FaSearch onClick={() => setShowInput(true)}
        )
    </section>
  )
}

 export default HiddenSearchBarP;