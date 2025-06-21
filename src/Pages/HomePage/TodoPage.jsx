import TodoList from "../../Components/TodoList/TodoList";

function TodoPage() {
    return(
        <div className="w-[90%] mx-auto flex flex-col gap-2 my-16">
            <h1 className="mb-10 text-3xl font-black text-center text-red-400" >To-do-List</h1>
            <TodoList />
        </div>
    );
}

export default TodoPage;