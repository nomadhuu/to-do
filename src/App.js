import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[350px]">
        <h1 className="text-2xl font-bold text-center mb-5 text-indigo-600">
          📝 Todo App
        </h1>

        <div className="flex mb-5">
          <input
            type="text"
            value={task}
            placeholder="Таск оруул..."
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 border border-gray-300 rounded-l-md p-2 focus:outline-none focus:border-indigo-500"
          />

          <button
            onClick={addTask}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 rounded-r-md transition"
          >
            Нэмэх
          </button>
        </div>

        <ul>
          {todos.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 p-2 mb-2 rounded-md"
            >
              <span>{t}</span>
              <button
                onClick={() => deleteTask(index)}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md transition"
              >
                Устгах
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
