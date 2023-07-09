import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  //Auth context
  const { signInUser } = useContext(AuthContext);

  const onFormSubmit = (formData) => {
    signInUser(formData.email, formData.password)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err.message));
  };
  return (
    <section className="h-[600px] flex justify-center items-center">
      <div className="card w-96 bg-base-100 rounded-md shadow-xl ">
        <form
          className="card-body"
          onSubmit={handleSubmit(onFormSubmit)}
          noValidate
        >
          <h2 className="card-title text-center">Login</h2>

          <div className="divider"></div>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            id="email"
            placeholder="Email"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <p className="text-red-500">{errors.email?.message}</p>
          <input
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Password can not be less than 6 characters",
              },
            })}
            type="password"
            id="password"
            placeholder="password"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <p className="text-red-500">{errors.password?.message}</p>
          <input
            type="submit"
            value="Login"
            className="btn bg-green-300 hover:bg-green-400 text-green-950 "
          />
          <p className="mt-4 font-medium">
            New to Revive-Well? Please{" "}
            <Link to="/register" className="text-orange-400">
              Register
            </Link>
          </p>
          <div className="divider"></div>
          <button className="btn btn-outline btn-accent">
            Sign in With Google
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
