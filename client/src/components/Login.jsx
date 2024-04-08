import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
 
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box" style={{ backgroundColor: "white" }}>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Using a span with onClick to close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost relative right-2 top-2"
              style={{ paddingLeft: "480px" }}
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            {/* {Email} */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            {/* {password} */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>
            {/* <Button/> */}
            <div className="justify-around mt-4">
              <button className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
