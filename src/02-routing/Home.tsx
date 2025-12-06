import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <>
      <h2>🏠 Home page</h2>
      <p>Welcome to the Single Page (SPA) application using the React Router!</p>
      <Link to="/about">About</Link>
      <button onClick={() => navigate('/')  }>
        Back to /
      </button>
      <button onClick={() => navigate(-1)  }>
        Before
      </button>
    </>
  );
};  
export default Home;