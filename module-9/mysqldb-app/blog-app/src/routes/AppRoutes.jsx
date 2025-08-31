import { Routes, Route } from "react-router-dom";
import { PostPage } from "../pages/PostPage";
import CreatePostPage from "../CreatePostPage";
import HomePage from "../pages/HomePage";

export default function AppRoutes(props) {
    return(
        <Routes>

            <Route path='/posts' element={<PostPage {...props} />} >
                {/* <Route index element={<PostList />} />
                <Route path=":id" element={<Post />} /> */}
            </Route>

            <Route path='/create' element={<CreatePostPage {...props} />} >

            </Route>

            <Route index element={<HomePage {...props} />} />

        </Routes>
    )
}