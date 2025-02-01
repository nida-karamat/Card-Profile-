/*import React from 'react'

 const Header = () => {
  return (
    <div>
         <h1>Wellcome To My First Website</h1>
     <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>   
     </nav>
    </div>
  )
}
 export default Header;*/


 //password
 /*import React from 'react'
 
 const ValidPassword=()=> <h1>Valid Password</h1>
  
 const InValidPassword=()=> <h1>Invalid Password</h1>
 
  const Header = ({isValid}) => {
   return isValid ? <ValidPassword/> : <InVallidPassword/>;
    
 }
 export default Header;*/

 import React from 'react'
 
  const Header = () => {
    const style={
      backgroundColor:'gray',
      color:'white',
     borderRadius:'8px',
     padding:'10px',
        }
    const items=['wireless earbuds', 'power bank' ,'new SSD']
   return (
     <div style={style}>
      <h1>Cart</h1>
      {items.length>0 && <h2>you have {items.length} item in your cart</h2> }
     </div>
   )
 }
 export default Header;
 