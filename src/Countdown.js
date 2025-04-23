import React from 'react';
import './Countdown.css';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.start || 10,
      isRunning: false
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    this.setState({ isRunning: true });
    this.timerID = setInterval(() => {
      this.setState(prevState => {
        if (prevState.count <= 1) {
          this.stopTimer();
          return { count: 0, isRunning: false };
        }
        return { count: prevState.count - 1 };
      });
    }, 1000);
  }

  stopTimer = () => {
    if (this.timerID) {
      clearInterval(this.timerID);
      this.setState({ isRunning: false });
    }
  }

  resetTimer = () => {
    this.stopTimer();
    this.setState({ count: this.props.start }, this.startTimer);
  }

  render() {
    const { count, isRunning } = this.state;
    
    return (
      <div className="countdown-container">
        <div className="countdown-display">
          {count === 0 ? (
            <span className="times-up">Time's up!</span>
          ) : (
            <span className="count">{count}</span>
          )}
        </div>
        
        <div className="countdown-controls">
          {!isRunning && count > 0 && (
            <button 
              className="start-button"
              onClick={this.startTimer}
            >
              Start
            </button>
          )}
          
          {isRunning && (
            <button 
              className="pause-button"
              onClick={this.stopTimer}
            >
              Pause
            </button>
          )}
          
          <button 
            className="reset-button"
            onClick={this.resetTimer}
            disabled={count === this.props.start && !isRunning}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Countdown;