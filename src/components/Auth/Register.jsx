import React from "react";
import { useForm } from "react-hook-form";
import { registerUserRequest } from "../../redux/Auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./register.css";

function Register() {

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirectToHomePage = () => {
    navigate("/");
  };
  const onSubmit = (data) => {
    dispatch(registerUserRequest({ ...data, redirectToHomePage }));
  };

  const handleBtn = () => {
    navigate("/signin");
  };

  return (
    <div className="bg-img">
      <div className="register-container">
        <h3 className="register-heading">Register</h3>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              className="form-input"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <button className="btn-submit" type="submit">
            Register
          </button>
        </form>
        <div className="register-footer">
          <p className="footer-text">Already have an account?</p>
          <button className="btn-navigate" onClick={handleBtn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
