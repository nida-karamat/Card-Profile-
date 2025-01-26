import React from 'react'

export default function Register(props) {
    let btnStyle={
        backgroundColor: "green",
        color: "white",
    }
    let btnText,passBoxType;
    if(props.showPassword === true){
        btnStyle.backgroundColor='red';
        btnText="Hide Password";
        passBoxType="Text";
    }
    else{
        btnText="Show Password";
        passBoxType="password";
    }
  return (
    <div className='container card p-3 mt-3 register-container'>
        <h1 className='text-center'>Registation Form</h1>    
        <form onSubmit={props.submit}>
            <div className='form-group'>
            <label htmlFor='name'>Name</label> 
            <input type='text' name='name' required className='form-control' /> {/*required means its require validation*/}
            </div>
            <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' required className='form-control' />
            </div>
            <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type={passBoxType} name='password' className='form-control' />
            </div><br/>
            <button type='submit' mt-1 className='btn btn-warning'>Register</button>
            <button type='button' className='btn m-1'onClick={props.click} style={btnStyle}>{btnText}</button>
        </form>
    </div>
  )
}
