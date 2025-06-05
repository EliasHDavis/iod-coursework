import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from './useQuery';

export default function ToDoList() {

  //when user logs in, create a new to do list if a user list doesn't exist. This will take logic out of add task function

  const [newTask, setNewTask] = useState("");
  const [list, setList] = useState([]);
  const [queryParams, setQueryParams] = useState({})

  const {error, loading, data} = useQuery(queryParams)

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    const task = {id: uuidv4(), text: newTask};
    setList([...list, task]);
    setNewTask("");
    setQueryParams({
        url: "api Route",
        body: {
            method: "PUT",
            headers: "",
            body: JSON.stringify([...list])
        }
    })
  };

  const deleteTask = (id) => {
    setList(list.filter((task) => task.id !== id))
  }

  return (
    <div>
      <div>
        <ol>
          {list.map((task) => (
            <li key={task.id}>
              <input type='checkbox'></input>
              {task.text}
              <button onClick={() => deleteTask(task.id)}>Delete Task</button>
            </li>
          ))}
        </ol>
      </div>

      <form onSubmit={addTask}>
        <label htmlFor="userTask">New Task:</label>
        <input
          id="userTask"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
