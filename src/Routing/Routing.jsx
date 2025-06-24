import { Route, Routes } from "react-router-dom";
import MainLayout from "../Pages/Layout/MainLayout";
import PrivateRoute from "../Pages/EntryPage/AuthPage/PrivateRoute";
import { lazy, Suspense } from "react";
import HomeLayout from "../Pages/Layout/HomeLayout";
import { Facebook } from 'react-content-loader'
import { ErrorBoundary } from "react-error-boundary";
import CustomErrorBoundary from "../Components/ErrorBoundary/CustomErrorBoundary";

const LandingPage = lazy(() => import("../Pages/LandingPage/LandingPage"));
const AboutUsPage = lazy(() => import("../Pages/LandingPage/AboutUsPage/AboutusPage"));
const LoginPage = lazy(() => import("../Pages/EntryPage/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../Pages/EntryPage/RegisterPage/RegisterPage"));
const WelcomePage = lazy(() => import("../Pages/HomePage/WelcomePage/WelcomePage"));
const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));
const InboxPage = lazy(() => import("../Pages/HomePage/InboxPage/InboxPage"));
const TodoPage = lazy(() => import("../Pages/HomePage/TodoPage/TodoPage"));
const BooksPage = lazy(() => import("../Pages/HomePage/BooksPage/BooksPage"));
const MealPlannerPage = lazy(() => import("../Pages/HomePage/MealPlannerPage/MealPlannerPage"));
const SettingsPage = lazy(() => import("../Pages/HomePage/SettingsPage/SettingsPage"));
const TrashPage = lazy(() => import("../Pages/HomePage/TrashPage/TrashPage"));
const CoinsPage = lazy(() => import("../Pages/HomePage/CoinPage/CoinsPage/CoinsPage"));
const CoinDetailPage = lazy(() => import("../Pages/HomePage/CoinPage/CoinDetailPage/CoinDetailPage"));


function Routing() {
    return (
        <Suspense fallback={<div className="p-10"> <Facebook /></div>}>
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
                    <Route path="books" element={
                        <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
                            <BooksPage />
                        </ErrorBoundary>
                    } />
                    <Route path="meals" element={<MealPlannerPage />} />
                    <Route path="coins" element={
                        <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
                            <CoinsPage />
                        </ErrorBoundary>
                    } />
                    <Route path="coins/:coinId" element={
                        <ErrorBoundary FallbackComponent={CustomErrorBoundary}>
                            <CoinDetailPage />
                        </ErrorBoundary>
                    } />
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="trash" element={<TrashPage />} />

                </Route>
            </Routes>
        </Suspense>
    );
}

export default Routing;