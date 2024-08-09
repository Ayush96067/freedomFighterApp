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
      <dialog id="my_modal_3" className="modal dark:text-white">
        <div className="modal-box w-full  bg-white dark:bg-black p-11 shadow-black shadow-2xl border-2 border-slate-950">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              X
            </Link>
            <h3 className="font-bold text-lg text-center mb-8">LOGIN :) </h3>

            <div className="flex flex-col gap-12">
              <div>
                <span className="md:text-xl mr-10 md:mr-2">Email</span>{" "}
                <input
                  type="email"
                  placeholder="Enter your email...."
                  className="my-auto md:ml-20 p-1 w-auto md:p-3 text-white dark:text-black dark:bg-white rounded-md"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <span className=" mr-3 md:text-xl">Password</span>{" "}
                <input
                  type="password"
                  placeholder="xxxxxxxx"
                  {...register("password", { required: true })}
                  className="my-auto md:ml-11 w-auto p-1 md:p-3 text-white dark:text-black dark:bg-white rounded-md"
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="dark:bg-lime-300 bg-violet-500 text-white shadow hover:bg-violet-400 hover:border-none dark:hover:bg-lime-500 rounded-xl dark:text-black px-3 py-1 md:px-4 md:py-2"
                >
                  Login
                </button>
                <p>
                  If not registered?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-400 text-xl cursor-pointer"
                  >
                    SignUp
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
