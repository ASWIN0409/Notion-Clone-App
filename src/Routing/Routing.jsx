import { Route, Routes } from "react-router-dom";
import MainLayout from "../Pages/Layout/MainLayout";
import PrivateRoute from "../Pages/EntryPage/PrivateRoute";
import { lazy, Suspense } from "react";
import HomeLayout from "../Pages/Layout/HomeLayout";
import WelcomePage from "../Pages/HomePage/WelcomePage";
import HomePage from "../Pages/HomePage/HomePage";
import InboxPage from "../Pages/HomePage/InboxPage";
import TodoPage from "../Pages/HomePage/TodoPage";
import BooksPage from "../Pages/HomePage/BooksPage";
import MealPlannerPage from "../Pages/HomePage/MealPlannerPage";
import SettingsPage from "../Pages/HomePage/SettingsPage";
import TrashPage from "../Pages/HomePage/TrashPage";
import CoinsPage from "../Pages/HomePage/CoinsPage/CoinsPage";
import CoinDetailPage from "../Pages/HomePage/CoinsPage/CoinDetailPage";
import AboutUsPage from "../Pages/LandingPage/AboutusPage";

const LandingPage = lazy(() => import("../Pages/LandingPage/LandingPage"));
const LoginPage = lazy(() => import("../Pages/EntryPage/LoginPage"));
const RegisterPage = lazy(() => import("../Pages/EntryPage/RegisterPage"));

function Routing() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<LandingPage />} />
                    <Route path="/aboutus" element={<AboutUsPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={
                    <PrivateRoute>
                        <HomeLayout />
                    </PrivateRoute>
                }>
                    <Route index element={<HomePage />} />
                    <Route path="welcome" element={<WelcomePage />} />
                    <Route path="inbox" element={<InboxPage />} />
                    <Route path="todo" element={<TodoPage />} />
                    <Route path="books" element={<BooksPage />} />
                    <Route path="meals" element={<MealPlannerPage />} />
                    <Route path="coins" element={<CoinsPage />} />
                    <Route path="coins/:coinId" element={<CoinDetailPage />} />
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="trash" element={<TrashPage />} />

                </Route>
            </Routes>
        </Suspense>
    );
}

export default Routing;