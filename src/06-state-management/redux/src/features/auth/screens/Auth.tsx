import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { logout } from "../redux/auth.slice";

const AuthComponent = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <div>
      {isAuthenticated ? 
      (
        <div>
          <p>User is logged in</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      )
      : (<p>User is not logged in</p>)}
    </div>
  );
};
export default AuthComponent;