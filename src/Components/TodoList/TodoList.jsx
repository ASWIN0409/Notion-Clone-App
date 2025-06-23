import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, setWeekday, setNewTask, setEditValueHandler, startEditingHandler, saveEditHandler, handleTaskDelete } from '../../Store/Slice/todoSlice';


function TodoList() {

    const data = useSelector((state) => state.todo);
    console.log(data);
    const dispatch = useDispatch();

    return (

        <>
            <div className='flex flex-col items-center justify-center gap-3 p-2 md:flex-row '>
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
                        type="text"
                        value={data.newTask}
                        onChange={(e) => dispatch(setNewTask(e.target.value))}
                        placeholder='Enter a task...'
                    />
                    <button
                        className='hover:bg-gray-200 dark:hover:bg-[#3e3e3e] p-2 m-1 rounded-md'
                        onClick={() => dispatch(addNewTask())}>
                        <AddIcon />
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 p-4 m-2 md:grid-cols-2 lg:grid-cols-3' >
                {Object.entries(data.todoList).map(([day, tasks]) => (
                    <div key={day} className='w-full h-full p-2'>
                        <h3 className='text-3xl font-bold dark:bg-[#3e3e3e] px-2 py-1'>{day}</h3>
                        <ul className='p-2 m-1'>
                            {tasks.map((item, index) => (
                                data.editTask.day === day && data.editTask.index === index ?
                                    <li
                                        key={index}>
                                        <input
                                            type="text"
                                            value={data.editValue}
                                            onChange={(e) => dispatch(setEditValueHandler(e.target.value))}
                                            onBlur={() => dispatch(saveEditHandler())}
                                            onKeyDown={(e) => e.key === "Enter" && saveEditHandler()}
                                            className='w-full p-2 rounded  dark:bg-[#1F1F1F]'
                                        />
                                    </li>
                                    :
                                    <li
                                        className='flex justify-between p-1'
                                        key={index}
                                    >
                                        <span
                                            onClick={() => dispatch(startEditingHandler({ day, index, value: item }))}
                                        >{item}</span>
                                        <button
                                            onClick={() => dispatch(handleTaskDelete({ day, index }))}
                                        ><DeleteIcon fontSize='small' /></button>
                                    </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>




    );
}

export default TodoList;