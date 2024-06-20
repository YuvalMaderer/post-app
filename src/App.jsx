import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsFeedPage from "./pages/PostsFeedPage";
import PostDetailesPage from "./pages/PostDetailesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import NavBar from "./components/NavBar";
import CreatePostPage from "./pages/CreatePostPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts">
          <Route index element={<PostsFeedPage />} />
          <Route path=":postId" element={<PostDetailesPage />} />
          <Route path="create" element={<CreatePostPage />} />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
