import { Component } from 'react';
import './App.css';
import Child from './Child';

class AppLifecycle extends Component {

    state = {
        name: 'Peter'
    }

  constructor(){
    super();
    console.log("Constructor");
    this.state = {
        name: 'John'
    }
  }

  componentWillUnmount() { //Vor dem rendern
    console.log("Component will mount");

    if(window.innerWidth < 1000){
      this.setState({innerWidth:window.innerWidth})
    }
  }

  componentDidMount() { //Nach dem rendern
    console.log("Component did mount");
  }

  shouldComponentUpdate(nextProps ,nextState){ //Immer ein Return => wenn false, dann hört auf weiter zu rendern
    console.log("Should component update");
    return true;
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Prev Props", prevProps);
    console.log("Prev State", prevState);
    console.log("Component did update");
  }

  componentWillUnmount(){
    console.log("Compoenent will unmount");
  }

  changeState() {
    this.setState({name: "Andy"});
  }

  childUnmount(){
    this.setState({name: "Hu"});
  }

  render(){
    console.log("Render");
    if(this.state.name === "Hu"){
      return <div/>
    }
    return (
        <div className="App">
          Name: {this.state.name}
          Innerwidth: {this.state.innerWidth}
          <Child name={this.state.name}/>
          <button onClick={this.changeState.bind(this)}>Change state</button>
          <button onClick={this.childUnmount.bind(this)}>Child unmount</button>
        </div>
      );
  }
}

export default AppLifecycle;
