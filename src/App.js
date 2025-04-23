import React from 'react';
import './App.css';
import Countdown from './Countdown';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: 10,
      key: 0
    };
  }

  handleStartValueChange = (e) => {
    this.setState({ startValue: parseInt(e.target.value) || 0 });
  }

  resetComponent = () => {
    this.setState(prevState => ({
      key: prevState.key + 1
    }));
  }

  render() {
    return (
      <div className="app">
        <h1>Countdown Timer Demo</h1>
        <div className="controls">
          <label>
            Starting value:
            <input 
              type="number" 
              value={this.state.startValue} 
              onChange={this.handleStartValueChange}
              min="1"
            />
          </label>
          <button onClick={this.resetComponent}>
            Create New Timer
          </button>
        </div>
        <Countdown 
          key={this.state.key} 
          start={this.state.startValue} 
        />
      </div>
    );
  }
}

export default App;