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

import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, isCompleted: false }]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">To-Do List Planner</h1>
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
