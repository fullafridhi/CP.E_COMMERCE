import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LoginUser } from "../redux/slices/UserSlice";
import './Login.css'; // Import the CSS file

const Login = () => {
  const { isAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuth) {
      navigate("/home");
    }
  }, [isAuth, navigate]);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(LoginUser(data));
    console.log(errors);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Email is required</span>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            maxLength: 12,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
          })}
        />
        {errors.password && (
          <span>Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number</span>
        )}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
