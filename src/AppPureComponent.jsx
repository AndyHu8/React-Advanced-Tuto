import { Component, PureComponent } from 'react';
import './App.css';

const Temp = (props) => {
    console.log("render Temp");
  return (
    <div>{props.val}</div>
  )
}

class AppPureComponents extends PureComponent {

state = {
    val: 1
}

componentDidMount(){
    setInterval(() => {
        this.setState(() => {
            return {val: 1}
        })
    }, 2000)
}

render() {
    console.log("render App");
    return (
        <div className="App">
          <Temp val={this.state.val}/>
        </div>
      );
    }
}

export default AppPureComponents;
