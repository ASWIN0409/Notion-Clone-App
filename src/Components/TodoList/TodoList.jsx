import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, setWeekday, setNewTask, setEditValueHandler, setInitialTodoList, startEditingHandler, saveEditHandler, handleTaskDelete, toggleTaskCompletion } from '../../Store/Slice/todoSlice';
import { useEffect } from 'react';

function TodoList() {
    const data = useSelector((state) => state.todo);
    const dispatch = useDispatch();


    // Load from localStorage once when component mounts
    useEffect(() => {
        const saved = localStorage.getItem("todoData");
        if (saved) {
            const parsed = JSON.parse(saved);
            dispatch({ type: "todo/setInitialTodoList", payload: parsed });
        }
    }, [dispatch]);

    // Save to localStorage whenever todoList changes
    useEffect(() => {
        localStorage.setItem("todoData", JSON.stringify(data.todoList));
    }, [data.todoList]);


    return (
        <>
            {/* Input Section */}
            <div className='flex flex-col items-center justify-center gap-3 p-2 md:flex-row'>
                <select
                    className='dark:bg-[#3e3e3e] p-2 m-1 rounded-md w-32'
                    value={data.weekDay}
                    onChange={(e) => dispatch(setWeekday(e.target.value))}
                >
                    {Object.keys(data.todoList).map((day) => (
                        <option key={day}>{day}</option>
                    ))}
                </select>

                <div className='flex justify-between md:justify-start'>
                    <input
                        className='dark:bg-[#3e3e3e] p-2 m-1 rounded-md border-none'
                        type='text'
                        value={data.newTask}
                        onChange={(e) => dispatch(setNewTask(e.target.value))}
                        placeholder='Enter a task...'
                    />
                    <button
                        className='hover:bg-gray-200 dark:hover:bg-[#3e3e3e] p-2 m-1 rounded-md'
                        onClick={() => dispatch(addNewTask())}
                    >
                        <AddIcon />
                    </button>
                </div>
            </div>

            {/* Task List Section */}
            <div className='grid grid-cols-1 p-4 m-2 md:grid-cols-2 lg:grid-cols-3'>
                {Object.entries(data.todoList).map(([day, tasks]) => (
                    <div key={day} className='w-full h-full p-2'>
                        <h3 className='text-3xl font-bold dark:bg-[#3e3e3e] px-2 py-1'>
                            {day}
                        </h3>
                        <ul className='p-2 m-1'>
                            {tasks.map((item, index) =>
                                data.editTask.day === day && data.editTask.index === index ?
                                    <li key={index}>
                                        <input
                                            type='text'
                                            value={data.editValue}
                                            onChange={(e) =>
                                                dispatch(setEditValueHandler(e.target.value))
                                            }
                                            onBlur={() => dispatch(saveEditHandler())}
                                            onKeyDown={(e) =>
                                                e.key === 'Enter' && dispatch(saveEditHandler())
                                            }
                                            className='w-full p-2 rounded dark:text-gray-300 bg-[#1F1F1F]' />
                                    </li>
                                    : <li
                                        className='flex items-center justify-between p-1'
                                        key={index}>
                                        <span
                                            className={`flex-1 cursor-pointer dark:text-gray-300  ${item.completed ? 'line-through text-gray-400' : 'text-[#3e3e3e]'}`}
                                            onClick={() => dispatch(toggleTaskCompletion({ day, index }))}
                                            title='Click to toggle complete'>
                                            {item.task}
                                        </span>

                                        <div className='flex items-center justify-center gap-2 p-1'>
                                            <button
                                                onClick={() => dispatch(startEditingHandler({ day, index, value: item.task }))}
                                                className='text-sm text-blue-500 hover:underline'>
                                                <EditIcon className='dark:text-gray-300 text text-[#3e3e3e]' />
                                            </button>

                                            <button onClick={() => dispatch(handleTaskDelete({ day, index }))}>
                                                <DeleteIcon fontSize='small' />
                                            </button>
                                        </div>
                                    </li>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}

export default TodoList;
