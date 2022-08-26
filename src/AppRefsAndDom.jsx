import { Component } from 'react';
import './App.css';

const MyInput = (props) => {
return (
    <input type="text" ref={props.inputRef}/>
)
}

const CustomFunc = () => {
    let inputRef = null; 

    const onClick = () => {
        inputRef.focus();
    }
    
    return (
        <div>
            <span>My Input</span>
            <MyInput inputRef={(input) => inputRef = input}/>
            <input type="submit" value="submit" onClick={onClick}/>
        </div>
    )
}

class AppRefsAndDom extends Component {

    onclick = () => {
        alert("YAY");
    }

    onKeyUp = (target, e) => {
        if(e.keyCode === 13) {
            switch (target) {
                case "firstName": this.lastName.focus(); break;
                case "lastName": this.age.focus(); break;
                case "age": this.submit.focus(); break;
                default: this.firstName.focus(); break;
            }
        }
    }

render() {
    return (
        <div className="App">
            <CustomFunc/>
          <div>
            <span>First Name:</span>
            <input ref={(input) => this.firstName = input} onKeyUp={this.onKeyUp.bind(this, "firstName")} type="text" />
          </div>
          <div>
            <span>Last Name:</span>
            <input ref={(input) => this.lastName = input} onKeyUp={this.onKeyUp.bind(this, "lastName")} type="text" />
          </div>
          <div>
            <span>Age:</span>
            <input ref={(input) => this.age = input} onKeyUp={this.onKeyUp.bind(this, "age")} type="text" />
          </div>
          <div>
            <input type="submit" value="submit" onKeyUp={this.onKeyUp.bind(this, "submit")} onClick={this.onClick}/>
          </div>
        </div>
      );
    }
}

export default AppRefsAndDom;
