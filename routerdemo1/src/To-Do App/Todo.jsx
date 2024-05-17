import { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState(["go gym", "play", "sleep"]);
  const [newTask, setNewtask] = useState("");

  const handleNewTask = (event) => {
    setNewtask(event.target.value);
  };

  const addTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (i) => {
    const updatedArray = tasks.filter((_, index) => index !== i);
    setTasks(updatedArray);
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        placeholder="Enter a task"
        onChange={handleNewTask}
      />
      <button onClick={addTask}>Add</button>

      <ol>
        {tasks.map((task, i) => (
          <li key={i}>
            <span>{task}</span>
            <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Todo;
