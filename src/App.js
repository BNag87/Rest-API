import { useState } from 'react'
import './App.css';
import Header from "./components/Header"
import Tasks from './components/Tasks';

const App = () => {
  const[tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors appointment",
        day: "Feb 5th, 2:30pm",
        reminder: true,
    },

    {
        id: 2,
        text: "Meeting at school",
        day: "Feb 6th, 2:30pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Food Shopping",
        day: "Feb 5th, 2:30pm",
        reminder: false,
    }
])

//delete a task
const deleteTask = (id) => {
  //console.log("Deleted a task!", id) →test functionality
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle Reminder field
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:
      !task.reminder } : task
    )
  )
  //console.log("ID used in toggleReminder is", id)
}

return (
    <div className="container">
      <Header />
      {/* if tasks.length is greater than o, then display. showing nothing otherwise */}
      {tasks.length > 0 ? (<Tasks tasks= {tasks} onDelete= {deleteTask} onToggle={toggleReminder}/>) : ("No Tasks to Show")}
    </div>
  );
}

export default App;
