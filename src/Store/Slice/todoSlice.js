import { createSlice } from "@reduxjs/toolkit";
import { initialTodoData } from "../../Helpers/initialTodoData";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: initialTodoData,
        weekDay: "Monday",
        newTask: "",
        editTask: { day: null, index: null },
        editValue: "",
    },
    reducers: {
        setWeekday: (state, action) => {
            state.weekDay = action.payload;
        },
        setNewTask: (state, action) => {
            state.newTask = action.payload;
        },
        addNewTask: (state) => {
            console.log("add new task reducer triggered");
            const task = state.newTask.trim();
            if (!task) return;

            const day = state.weekDay;
            if (!state.todoList[day]) {
                state.todoList[day] = [];
            }
            state.todoList[day].push(task);
            state.newTask= "";
        },
        setEditValueHandler: (state, action) => {
            state.editValue = action.payload;
        },
        startEditingHandler: (state, action) => {
            const { day, index, value } = action.payload;
            state.editTask = { day, index };
            state.editValue = value;
        },
        saveEditHandler: (state) => {
            const { day, index } = state.editTask;
            const value = state.editValue.trim();
            if (!value) return;

            const updatedTasks = [...state.todoList[day]];
            updatedTasks[index] = value;

            state.todoList[day] = updatedTasks;
            state.editTask = { day: null, index: null };
            state.editValue = "";
        },
        handleTaskDelete: (state, action) => {
            const { day, index } = action.payload;
            state.todoList[day] = state.todoList[day].filter((_, i) => i !== index);
        }

    }

});

export const { setWeekday, setNewTask, addNewTask, setEditValueHandler, startEditingHandler, saveEditHandler, handleTaskDelete } = todoSlice.actions;

export default todoSlice.reducer;