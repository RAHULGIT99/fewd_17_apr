import React from 'react';
import './LifecycleComponent.css';

class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log('Constructor: Component is being initialized');
  }

  componentDidMount() {
    console.log('ComponentDidMount: Component has been rendered to the DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate: Component was updated', {
      prevProps,
      currentProps: this.props,
      prevState,
      currentState: this.state
    });
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is about to be removed from the DOM');
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    console.log('Render: Component   is rendering');
    return (
      <div className="lifecycle-component">
        <h2>React Lifecycle Component</h2>
        <p>Counter Value: {this.state.counter}</p>
        <button onClick={this.handleClick}>Update State</button>
      </div>
    );
  }
}

export default LifecycleComponent;