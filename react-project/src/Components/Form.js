import React, { Component } from 'react'

 class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      country: null,
      name:null,
    };
  }
      // form change element data  
  /*nameChangeHandler =(event)=>{
    console.log("Name",event.target.value);  //target input ko target krnta 

  }
  onChangeHandler =(event)=>{
    console.log("select",event.target.value);
  }*/

    onSubmitHandler=(event)=>{
      event.preventDefault();  //stop refreshing data
      console.log(this.state);
      const name=event.target.name.value;
      const country=event.target.country.value;
      this.setState({name,country} , ()=>{
        console.log(this.state);
        event.target.name.value="";
        event.target.country.value="";   //display data null
      });
    }
  render() {
    return (
      <div style={{
        textAlign:'center',
      }
      }>
        <form onSubmit={this.onSubmitHandler}>  onReset={}
          <div>
          <label htmlFor='Name'>Name</label>
         {/*(--- change the data form element )<input type="text" name="name" onKeyUp={this.nameChangeHandler}/>*/}
          <input type='text'name='name'></input>  
        </div>
          <br/>
          <div>
          <label htmlFor='name'>Country</label>
          {/* change and pic data form select element <select onChange={this.onChangeHandler}>*/}
          <select name='country'>
            <option value="1">pakistan</option>
            <option value="2">egland</option>
            <option value="3">astralia</option>
            <option value="4">sudia</option>
          </select>
          </div><br/>
          <button type='submit'>submit</button><br/>
          
        </form>
      </div>
    )
  }
}

export default Form