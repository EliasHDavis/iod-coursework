import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import Homepage from "../pages/HomePage";
import DashboardPage, { DashboardMessages, DashboardTasks } from "../pages/DashboardPage";
import PageNotFound from "../pages/PageNotFound";
import { BitcoinRates } from "../BitcoinRates";
import { BigCats } from "../BigCats";
import { Emoji } from "../Emoji";
import { LoginForm } from "../pages/LoginForm";
import ProtectedRoute from "./ProtectedRoutes";
import PostsPage, { Post, PostList } from "../pages/PostsPage"



function AppRoutes(props) {

    return (
        <Routes>

            <Route path='/posts' element={<PostsPage {...props} />} >
                <Route index element={<PostList />} />
                {/* dynamic param taken from route, stored in variable called id */}
                <Route path=":id" element={<Post />} />
            </Route>

            {/* index matches on default/home URL: / */}
            <Route index element={<Homepage {...props} />} />

            {/* nested routes, matches on /dash/tasks etc */}
            <Route path="dash" element={<ProtectedRoute><DashboardPage {...props} /></ProtectedRoute>}>
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>

            <Route path='/bitcoinRates' element={<BitcoinRates />} />
            <Route path='/bigCats' element={<BigCats />} />
            <Route path='/emoji' element={<Emoji />} />

            <Route path='/about' element={<AboutPage {...props} />} />

            <Route path='/login' element={<LoginForm {...props} />} />

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;