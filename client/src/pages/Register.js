import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../redux/slices/UserSlice";
import './Register.css'; // Import the CSS file

const Register = () => {
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
    dispatch(RegisterUser(data));
  };

  return (
    <div className="register-container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="error-message">Name is required</span>}
        
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error-message">Email is required</span>}

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
          <span className="error-message">
            Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number
          </span>
        )}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
