import { useEffect, useState } from 'react';
import { initialMealData } from '../../Helpers/initialMealData';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

function MealList() {

    const [mealPlan, setMealPlan] = useState(() => {
        const saved = localStorage.getItem("mealPlan");
        return saved ? JSON.parse(saved) : initialMealData;
    })
    const [newMeal, setNewMeal] = useState("");  //adding new meal
    const [selectedDay, setSelectedDay] = useState("Monday");  //for selecting days
    const [edit, setEdit] = useState({ day: null, index: null });   //for editing
    const [editValue, setEditValue] = useState("");  // setting editted values

    useEffect(() => {
        localStorage.setItem("mealPlan", JSON.stringify(mealPlan));
    }, [mealPlan]);

    const addMeal = () => {
        if (!newMeal.trim()) return;
        setMealPlan((prev) => ({
            ...prev,
            [selectedDay]: [...(prev[selectedDay] || []), newMeal.trim()],
        }));
        setNewMeal("");
    };

    const startEditing = (day, index, value) => {
        setEdit({ day, index });
        setEditValue(value);
    };

    const saveEdit = () => {
        const { day, index } = edit;
        if (!editValue.trim()) return;
        setMealPlan((prev) => {
            const updatedMeals = [...prev[day]];
            updatedMeals[index] = editValue.trim();
            return { ...prev, [day]: updatedMeals };
        });
        setEdit({ day: null, index: null });
        setEditValue("");
    }

    const deleteMeal = (day, index) => {
        setMealPlan((prev) => ({
            ...prev,
            [day]: prev[day].filter((_, idx) => idx !== index),
        }))
    }

    return (
        <>

            <div className='flex flex-col items-center justify-center gap-3 p-2 md:flex-row '>
                <select
                    className='dark:bg-[#3e3e3e] p-2 m-1 rounded-md w-32'
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                >
                    {Object.keys(mealPlan).map((day) => (
                        <option key={day}>{day}</option>
                    ))}
                </select>

                <div className='flex justify-between md:justify-start'>
                    <input
                        className='dark:bg-[#3e3e3e] p-2 m-1 rounded-md border-none'
                        type="text"
                        placeholder='Enter new Meal...'
                        value={newMeal}
                        onChange={(e) => setNewMeal(e.target.value)}
                    />

                    <button className='hover:bg-gray-200 dark:hover:bg-[#3e3e3e] p-2 m-1 rounded-md' onClick={addMeal}><AddIcon /></button>
                </div>
            </div>

            <div className='grid grid-cols-1 p-4 m-2 md:grid-cols-2 lg:grid-cols-3' >
                {Object.entries(mealPlan).map(([day, meals]) => (
                    <div key={day} className='w-full h-full p-2'>
                        <h3 className='text-3xl font-bold dark:bg-[#3e3e3e] px-2 py-1 bg-gray-200'>{day}</h3>
                        <ul className='p-2 m-1'>
                            {meals.map((item, index) => (
                                edit.day === day && edit.index === index ?
                                    <li
                                        key={index}>
                                        <input
                                            type="text"
                                            value={editValue}
                                            onChange={(e) => setEditValue(e.target.value)}
                                            onBlur={saveEdit}
                                            onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                                            className='w-full p-2 rounded  dark:bg-[#1F1F1F]'
                                        />
                                    </li>
                                    :
                                    <li
                                        className='flex justify-between p-1'
                                        key={index}>
                                        <span onClick={() => startEditing(day, index, item)}>{item}</span>
                                        <button onClick={() => deleteMeal(day, index)}><DeleteIcon fontSize='small' /></button>
                                    </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MealList;