import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Box from './Person/Box';

class App extends Component {
  state = {
    persons: [
      {name: 'Dwyane', age: 35, interest: 'Basketball'},
      {name: 'Lebron', age: 34, interest: 'Tennis'},
      {name: 'Bosh', age: 32, interest: 'Volleyball'}
    ],
    box: [
      {boxText: 'OK'}
    ],
    otherState: 'some other value'
  }

switchNameHandler = (newName) => {
  //console.log('Button was clicked');
  this.setState({
    persons: [
      {name: newName, age: 8, interest: 'Gaming'},
      {name: 'Lebron Jr', age: 10, interest: 'Reading'},
      {name: 'Bosh Jr', age: 12, interest: 'Drawing'}
    ]
  
  });
}

nameChangedHandler = (event) => {
  //console.log('Paragraph was clicked');
  this.setState({
    persons: [
      {name: 'Tim', age: 8},
      {name: event.target.value, age: 10},
      {name: 'Chia', age: 12}
    ]
  });
}

onHoverHandler = (event) => {
  //console.log('Paragraph was clicked');
  this.setState({
    box: [
      {boxText: 'Done'}
    ]
  
  });
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Dwyane')}>Babyify</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          interest={this.state.persons[0].interest}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          interest={this.state.persons[1].interest}
          click={this.switchNameHandler.bind(this, 'Wesbert')} 
          changed={this.nameChangedHandler}> My Hobbies: Racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          interest={this.state.persons[2].interest}/>

        <Box boxText={this.state.box[0].boxText} 
                click={this.onHoverHandler}  />
                
      </div>
    );
  
 //return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'Hi I\'m a React App!!!'));
  }
}

export default App;
