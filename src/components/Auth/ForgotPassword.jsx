import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { resetUserRequest } from "../../redux/Auth/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./forgotPassword.css";
function ForgotPassword() {
  const { register, handleSubmit } = useForm();
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onSubmit = (data) => {
    dispatch(resetUserRequest({ ...data, setSuccess }));
  };
  return (
    <div className="reset-container">
      <div className="container-box">
        <p class="box-headings">Forgot Password</p>
        {success ? (
          <>
            <p className="response-input">
              Password reset link sent successfully ! Please check your email
              inbox .
            </p>
               <button className="login-btn" onClick={() => navigate("/")}>
              Go to Login
            </button>
          </>
        ) : (
          <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="email-group">
              <input
                className="email-input"
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            <button className="reset-btn" type="submit">
              Forgot Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
