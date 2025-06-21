import TodoList from "../../Components/TodoList/TodoList";
import EventNoteIcon from '@mui/icons-material/EventNote';

function TodoPage() {
    return(
        <div className="w-[90%] mx-auto">
            <div className="flex items-center justify-center gap-2 m-16">
                <EventNoteIcon fontSize="large" className="text-red-300"/>
                <h1 className="text-3xl font-black text-center text-red-400 " >To-do-List</h1>
            </div>
            <TodoList />
        </div>
    );
}

export default TodoPage;