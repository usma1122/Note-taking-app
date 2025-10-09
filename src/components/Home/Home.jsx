import React from "react";
import { useDispatch } from "react-redux";
import { logoutUserRequest } from "../../redux/Auth/actions";
function Home() {
  const dispatch = useDispatch();
  const signOutBtn = () => {
    dispatch(logoutUserRequest());
  };
  return (
    <div>
      <h3>Usman Aslam</h3>
      <button onClick={signOutBtn}>Sign Out</button>
    </div>
  );
}

export default Home;
