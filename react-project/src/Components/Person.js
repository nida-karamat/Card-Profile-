//class component

import React,{Component} from "react";
//import Women from"./Women";
import PersonStyle from "./Person.module.css";

//class based component
class Person extends Component{
    constructor(props){
        super(props);
        this.props=props;
     /*   this.state={
            name:"nida",
            age:22,

        };*/
    }
   /* nameChangeHandler(){
        //alert();
        console.log(this.state);
        this.setState({
            name:"mahreeen" ,age:24},() => {
            console.log(this.state);
            
        });

    }*/
    
    render(){
        const style={
            fontSize:"20px",
            color:"red",
                };
        return(
            <div className={PersonStyle.personBox} onClick={this.props.remove}> 
                <label style={style}>Name</label>:<i style={{
                    fontSize: "20px",
                    color:"purple",
                }}>{this.props.name}</i>
                <br/>
                <label>age</label>: <i>{this.props.age}</i>
                <br></br>
                <label>qualification:</label><i>{this.props.qualification}</i>
        
                


                 {/* <i>Dear {this.props.name},{this.props.age} wellcome to my new application</i>
                    state....  Dear {this.state.name}, {this,this.state.age} year !!!
                    <button onClick={()=>this.nameChangeHandler()}>click me</button>*/}
                    
            </div>  
           
        );
    }
}

 export default Person;

 /*render(){
    return(
        <div>
            <div>Name:Nida</div>
            <Women></Women>  
        </div>  
       
    );
}
}*/