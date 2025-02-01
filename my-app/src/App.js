import React, { Component } from 'react';
import './App.css';
import Register from './Components/Register';
import Greet from './Components/Greet';

 class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isRegister:false,
       name:null,
       email:null,
       password:null,
       showPassword: false,
    }
  }
  showPasswordHandler = ()=>{
    console.log(this.state);
    this.setState({showPassword: !this.state.showPassword},()=>{
      console.log(this.state);
    });
  }
  registationhandler =(event)=>{
    event.preventDefault();
    //console.log(event.target.name.value);
    const name= event.target.name.value;
    const email= event.target.email.value;
    const password= event.target.password.value;
    this.setState({name,email,password , isRegister:true})

  }
  render() {
    return (
      <div>
       { this.state.isRegister ? 
       <Greet name={this.state.name} email={this.state.email}></Greet> : 
       <Register submit={this.registationhandler} showPassword={this.state.showPassword}
       click={this.showPasswordHandler}></Register>}
      </div>
    );
  }
}

export default App;
