
import { Routes, Route } from 'react-router-dom';
import Test from './features/auth/screens/Auth';

export default function AppRedux() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </>
  );
};
