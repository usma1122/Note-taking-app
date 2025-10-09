import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUserRequest } from "../../redux/Auth/actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./login.css";
function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const error = useSelector((state) => state.auth.error?.code);
  const redirectToHomePage = () => {
    navigate("/");
  };
  const onSubmit = (data) => {
    dispatch(loginUserRequest({ ...data, redirectToHomePage }));
  };
  const handleBtn = () => {
    navigate("/signup");
  };
  const resetHandle = ()=>{
    navigate("/resetpassword")
  }

  return (
    <div className="bg-image">
      <div className="login-container">
        <h3 className="login-heading">Sign In</h3>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-form">
            <input
              className="input-field"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="input-form">
            <input
              className="input-field"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <button className="login-btn" type="submit">
            Log In
          </button>
          <button onClick={resetHandle} className="forgot-btn">Forgot Password</button>
        </form>
        {/* <div>{error && <p>Invalid User Credential</p>}</div> */}
        <div className="footer-login">
          <p className="footer-login-text">Do not have any account?</p>
          <button className="login-btn-navigate" onClick={handleBtn}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
