// // import './App.css';
// // import ArrayToOrderedList from './ArrayToOrderedList';
// import ChildComponent from './ChildComponent';
// import Navbar from './Navbar';
// import React from 'react';
// // function App() {
// //   return (
// //     <div>
      
// //     <Navbar/>
// //     </div>
// //   );
// // }

// class App extends React.Component{
//   handleChildClick(){
//     alert('kmit kmit kmit!');
//   }
//   render(){
//     return(
//       <ChildComponent onClick={this.handleChildClick}/>
//     );
//   }
// }

// export default App;

// import React from "react";
// import Greeting from "./Greeting";
// function App(){
//   return(
//     <div>
//           <Greeting Name="bhanu" Organization="KMIT" Dept="CSE"/>
//           <hr/>
//           <Person />
//     </div>
    
//   )
// }
// export default App;

import React from 'react';
import './App.css';
import LifecycleComponent from './LifecycleComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true
    };
  }

  toggleComponent = () => {
    this.setState(prevState => ({
      showComponent: !prevState.showComponent
    }));
  }

  render() {
    return (
      <div className="app">
        <h1>Lifecycle Methods Demo</h1>
        <button onClick={this.toggleComponent}>
          {this.state.showComponent ? 'Unmount Component' : 'Mount Component'}
        </button>
        {this.state.showComponent && <LifecycleComponent value={this.state.showComponent} />}
        <div className="console-note">
          <h3>Check the console (F12) to see lifecycle method logs</h3>
        </div>
      </div>
    );
  }
}

export default App;