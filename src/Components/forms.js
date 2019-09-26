import React, { Component } from 'react';
class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:"",
            LastName:"",
            Iskicked: true,
          }
          this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(event){
        const {name, value, type, checked} = event.target
        type==="checkbox" ? this.setState({[name] : checked}): this.setState({[name]:value
})
    } 

    render() { 
        return ( 
            <form>
              <input type="text" name="firstName" placeholder="First name" value={this.state.firstName} onChange={this.clickHandler}/>
              <br/>
              <input type="text" 
              name="LastName" placeholder="LastName" value={this.state.LastName} onChange={this.clickHandler}/>
              <h1>{this.state.firstName} {this.state.LastName}</h1>

              <textarea rows="10" cols="35" onChange={this.clickHandler} value={"some default goes in "}/>
              <br/>
              <label for="">
              <input type="checkbox" 
              name="Iskicked"
              value={this.state.Iskicked}
              onChange={this.clickHandler}/>
              Iskicked?
              </label>
            </form>
         );
    }   
}
 
export default App3;