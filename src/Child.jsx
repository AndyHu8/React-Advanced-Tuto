import { Component } from 'react';
import './App.css';

class Child extends Component {

    state = {
        name: 'Peter'
    }

  constructor(){
    super();
    console.log("Child Constructor");
  }

  componentWillUnmount() { //Vor dem rendern
    console.log("Child Component will mount");
  }

  componentDidMount() { //Nach dem rendern
    console.log("Child Component did mount");
  }

  shouldComponentUpdate(nextProps ,nextState){
    console.log("Child Should component update");
    return true;
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Child Prev Props", prevProps);
    console.log("Child Prev State", prevState);
    console.log("Child Component did update");
  }

  componentWillUnmount(){
    console.log("Child compoenent will unmount");
  }

  render(){
    console.log("Child Render");
    return (
        <div className="App">
            Child Name: {this.props.name}
        </div>
      );
  }
}

export default Child;
