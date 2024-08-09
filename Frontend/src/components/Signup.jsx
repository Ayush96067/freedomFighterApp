import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <div className=" w-full h-screen flex items-center justify-center dark:text-white">
          <div className="modal-box  bg-white dark:bg-black p-11 shadow-black shadow-2xl border-2 border-slate-950">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg text-center mb-8">
                Sign Up :){" "}
              </h3>

              <div className="flex flex-col gap-5">
                <div>
                  <span className="md:text-xl mr-10 md:mr-3">Name</span>{" "}
                  <input
                    type="text"
                    placeholder="Enter your name.."
                    className="my-auto md:ml-20 p-1  md:p-3 w-auto text-white dark:text-black dark:bg-white rounded-md"
                    {...register("name", { required: true })}
                  />
                  <br />
                  {errors.name && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <span className="md:text-xl mr-10 md:mr-0">Email</span>{" "}
                  <input
                    type="email"
                    placeholder="Enter your email...."
                    className="my-auto md:ml-24 p-1  md:p-3 w-auto text-white dark:text-black dark:bg-white rounded-md"
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
                  <span className="mr-3 md:text-xl">Password</span>{" "}
                  <input
                    type="password"
                    placeholder="xxxxxxxx"
                    className="my-auto md:ml-12  w-auto p-1 md:p-3 text-white dark:text-black dark:bg-white rounded-md"
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <button className="dark:bg-lime-300 bg-violet-500 text-white shadow hover:bg-violet-400 hover:border-none dark:hover:bg-lime-500 rounded-xl dark:text-black px-3 py-1 md:px-4 md:py-2">
                    Signup
                  </button>
                  <p>
                    Already Have Account!{"  "}
                    <button
                      className="underline text-blue-400 text-lg cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_3").show()
                      }
                    >
                      Login
                    </button>
                  </p>
                  <Login />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
