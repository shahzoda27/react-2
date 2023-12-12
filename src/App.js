import React, {Component} from "react";
export default class App extends Component{
  state={
    active: true
  }
  active=()=>{
    this.setState({
      active: !this.state.active
    })
  }
  render(){
    const {active} = this.state
    return(
      <div className="container">
        {active ? (
          <div>
            <button onClick={this.active}>Login</button>
            <h1>Login</h1> 
            </div>):(<div>
              <button onClick={this.active}>Log out </button>
              <h1>Welcome</h1>
            </div>) 
        }
      </div>
    )
  }
}
