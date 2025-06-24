import FlatwareIcon from '@mui/icons-material/Flatware';
import MealList from "../../Components/MealList/MealList";

function MealPlannerPage() {
    return (
        <div className="w-[90%] mx-auto">
            <div className="flex items-center justify-center gap-2 m-16">
                <FlatwareIcon fontSize="large" className="text-green-500" />
                <h1 className="text-3xl font-black text-center text-green-500 " >Meal Planner</h1>
            </div>
            <MealList />
        </div>
    );
}

export default MealPlannerPage;