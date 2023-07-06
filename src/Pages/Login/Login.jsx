import React from "react";

const Login = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <div className="divider"></div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="password"
            className="input input-bordered input-accent w-full max-w-xs"
          />
          <input
            type="submit"
            value="Login"
            className="btn btn-outline btn-accent"
          />
          <div className="divider"></div>
          <input
            type="submit"
            value="Sign In With Google"
            className="btn btn-outline btn-accent"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
