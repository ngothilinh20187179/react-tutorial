import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AppLayout from './AppLayout';
import PostDetail from './PostDetail';


const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
        </Route>
        <Route path="*" element={<h1>404 | Not Found</h1>} />
      </Routes>
    </>
  );
};
export default AppRouter;