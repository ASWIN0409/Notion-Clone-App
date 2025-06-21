import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleAddTask() {
        if (!task.trim()) return;
        setTasks([...tasks, { text: task, completed: false }]);
        setTask("");
    }

    function toggleTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((item, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <div>
            <div className="flex justify-center w-full h-full gap-4 p-6">
                <input
                    className="w-[80%] h-10 p-2 border-[2px] text-[#3e3e3e] dark:bg-[#3E3E3E] dark:text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter your tasks..." />

                <button
                    onClick={handleAddTask}
                    className="h-10 p-2 font-semibold text-white bg-blue-500 rounded-md dark:bg-[#3E3E3E] dark:hover:bg-[#2f2f2f] dark:text-white hover:bg-blue-600">
                    Add
                </button>
            </div>

            <ul>
                {tasks.map((item, index) => (
                    <li 
                    className="flex items-center justify-between p-2 m-4 text-[#3e3e3e] rounded-md dark:text-gray-300"
                    key={index}>
                        <span
                            onClick={() => toggleTask(index)}
                            className={`cursor-pointer ${item.completed ? "line-through text-gray-400" : "text-gray-800 dark:text-white"}`}>
                            {item.text}
                        </span>
                        <button
                        className="w-5 h-5 font-bold text-red-500 hover:text-red-700"
                            onClick={() => deleteTask(index)}
                        ><DeleteIcon /></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;