import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AppLayout from './AppLayout';
import PostDetail from './PostDetail';
import List from '../03-foundations/List';
import Component from '../03-foundations/Component';
import EventHandlingDemo from '../03-foundations/HandlingEvents';
import LifecycleDemo from '../04-side-effect/Lifecycle';
import DataFetching from '../04-side-effect/DataFetching';
import UseRefHook from '../05-others-hooks/useRefHook';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
        </Route>
        <Route path="/list" element={<List />} />
        <Route path="/component" element={<Component />} />
        <Route path="/handling-events" element={<EventHandlingDemo />} />
        <Route path="/lifecycle" element={<LifecycleDemo />} />
        <Route path="/data-fetching" element={<DataFetching />} />
        <Route path="/useRef" element={<UseRefHook />} />
        <Route path="*" element={<h1>404 | Not Found</h1>} />
      </Routes>
    </>
  );
};
export default AppRouter;