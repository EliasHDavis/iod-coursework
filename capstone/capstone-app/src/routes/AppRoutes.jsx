import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import UserPage from "../pages/UserPage";
import ChartPage from "../pages/ChartPage";


export default function AppRoutes(props) {
    return (
        <Routes>

            <Route path= '/userpage' element={<UserPage {...props} />} />

            <Route path='/login' element={<LoginPage {...props} />} />

            <Route path='/chart' element={<ChartPage {...props} />} />

            <Route path='*' element={ <HomePage {...props} />} />

        </Routes>
    )
}