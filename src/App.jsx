import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import PostDetailesPage from "./pages/PostDetailesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/posts" element={<PostsPage />}></Route>
        <Route path="/postDetailsPage" element={<PostDetailesPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
