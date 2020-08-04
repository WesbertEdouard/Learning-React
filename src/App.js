import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Dwyane', age: 35},
      {name: 'Lebron', age: 34},
      {name: 'Bosh', age: 32}
    ],
    otherState: 'some other value'
  }

switchNameHandler = () => {
  //console.log('Button was clicked');
  this.setState({
    persons: [
      {name: 'Dwyane Jr', age: 8},
      {name: 'Lebron Jr', age: 10},
      {name: 'Bosh Jr', age: 12}
    ]
  
  });
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  
 //return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'Hi I\'m a React App!!!'));
  }
}

export default App;
