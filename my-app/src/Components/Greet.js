import React from 'react'

export default function Greet(props) {
  return (
    <div className='container card p-3 mt-3 register-container'>
        <h3>{props.name}</h3>
        <h3>THANK YOU FOR JOINING US!!</h3>
        <h3>Verification sent to email {props.email}</h3>
    </div>
  );
}
