
/*three way of bind
first is: this.buttonClickHandler=this.buttonClickHandler.bind(this);
second is:<buttton type="button" onClick={()=>this.buttonClickHandler()}>
third is:,buuton type="type" onClick={this.buttonClickHandler,bind(this)}*/
//import Women from "./Components/Women";
//import Demo from "./Components/Demo";
import Person from "./Components/Person";

import React,{ Component } from "react";
import Form from "./Components/Form";
import ControledComponent from "./Components/ControledComponent";
import "./App.css";
//import axios from "axios";

class App extends Component {
        constructor(props){
        super(props);
        this.props=props;
         this.state={
         Persons:[
            {
              name:"Hania",
              age:24,
              qualification:"ACCA",
            },
            {
              name:"neha",
              age:29,
              qualification:"",
            },
            {
              name:"Mahreen",
              age:23,
              qualification:"MBBs",
            },
            {
              name:"Ali",
              age:24,
              qualification:"B.E",
            },
            {
              name:"Umair",
              age:29,
              qualification:"BSCS",
            },
            {
              name:"Safia",
              age:20,
              qualification:"CTP",
            },
            {
              name:"kanza",
              age:24,
              qualification:"MBBs",
            },
            {
              name:"mehar ",
              age:19,
              qualification:"Diploma",
            },
            {
              name:"Mahreen",
              age:21,
              qualification:"phd",
            },
          ],
          isShow: true,
        };
        this.toggleHandler=this.toggleHandler.bind(this);
    }
    // deleting data
    removeHandler = (personIndex) =>{
      const personCopy=this.state.Persons;
      personCopy.splice(personIndex,1);
      this.setState({person:personCopy});

    }


   // this.buttonClickHandler=this.buttonClickHandler.bind(this);
   /* buttonClickHandler=() =>{
      //alert("hello");
      console.log(this.state);

    }*/
    //toggle
    toggleHandler(){
      this.setState({
        isShow: !this.state.isShow
      });
   }
    
    render()
    {
     let Persons;
     Persons=this.state.Persons.map((p,index) => {
        return (
        <Person key={index} name={p.name} age={p.age} qualification={p.qualification}
        remove={()=> this.removeHandler(index)} />
      );

 
      }); 
             /* <Demo number="1"/>
        <Person name="nida" age="22"/>
        <Demo number="2"/>
        <Person name="karamat" age="43"/>
        <Demo number="3"/>
        <Person name="Friend"/>
        <Person name="nida" age="22" />
        <button type="button" onClick={this.buttonClickHandler}>click me!</button><br/> 
        <label style={{
          color:"blue",
        }}><h1>testing</h1></label> */
    

       return (
       <div className="App">
        <div>
        <button onClick={this.toggleHandler}>toggle</button>
        </div>
      
        {this.state.isShow === true? Persons:""}
        <Form/>
       

        <ControledComponent/>
       </div>
       );
      
        }
      }
      

export default App;


