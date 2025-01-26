import React, { Component } from 'react'

export class ControledComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"Nida",
    }
  }
  onChangeHandler =(event)=>{
    console.log("oldstate",this.state);
    const name=event.target.value;
    this.setState({name} ,()=>{
      console.log("newstate",this.state);
    });

  };
  render() {
    return (
      <div style={{textAlign:'center', fontSize:'20px',}}>
        <form>
          <input type='text' name='user_Name' value={this.state.name} onChange={this.onChangeHandler} />
                  </form>
      </div>
    )
  }
}

export default ControledComponent