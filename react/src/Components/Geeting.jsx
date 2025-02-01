import React from 'react'

 const Geeting = () => {
    const geet="hello";
    const date=new Date();
  return (
    <div>
        <h1>{geet}</h1>
        <p>Date:{date.getDate()}</p>
    </div>
  )
}

export default Geeting;
