import { NavLink, Outlet } from 'react-router-dom';

const setActiveStyle = ({ isActive }: { isActive: boolean }) => {
  return {
    color: isActive ? 'blue' : 'black',
    fontWeight: isActive ? 'bold' : 'normal',
    marginRight: '15px'
  };
};

const AppLayout = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/home"
          style={setActiveStyle}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={setActiveStyle}
        >
          About
        </NavLink>
        <NavLink 
          to="/posts/500?view=full&sort=asc" 
          style={setActiveStyle}
        >
          Post param id=500 & query
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
};
export default AppLayout;