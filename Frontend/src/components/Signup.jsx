import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup successfull");
          navigate(from, { replace: true });
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error(err.response.data.message);
        }
      });
    document.querySelector(".input1").value = "";
    document.querySelector(".input2").value = "";
    document.querySelector(".input3").value = "";
  };

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
                <div className="flex justify-between">
                  <span className="md:text-xl mr-6  md:mr-3">Name</span>{" "}
                  <input
                    type="text"
                    placeholder="Enter your name.."
                    className="my-auto input1 md:ml-20 p-1  md:p-3 w-32 md:w-auto text-white dark:text-black dark:bg-white rounded-md"
                    {...register("fullname", { required: true })}
                  />
                  <br />
                  {errors.fullname && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <span className="mr-7 md:text-xl md:mr-0">Email</span>{" "}
                  <input
                    type="email"
                    placeholder="Enter your email...."
                    className=" my-auto input2 md:ml-24 p-1  md:p-3 w-32 md:w-auto text-white dark:text-black dark:bg-white rounded-md"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <span className="md:mr-3 md:text-xl">Password</span>{" "}
                  <input
                    type="password"
                    placeholder="xxxxxxxx"
                    className="my-auto md:ml-12 input3 w-32 md:w-auto p-1 md:p-3 text-white dark:text-black dark:bg-white rounded-md"
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="flex   justify-between">
                  <button className="dark:bg-lime-300 bg-violet-500 text-white shadow hover:bg-violet-400 hover:border-none dark:hover:bg-lime-500 rounded-xl dark:text-black px-2 py-[4px] md:px-4 md:py-2">
                    Signup
                  </button>
                  <p className="text-xs md:text-xl ">
                    Already Have Account!
                    <Link
                      className="underline text-blue-400 text-xs md:text-lg cursor-pointer"
                      to="/"
                    >
                      Login
                    </Link>
                  </p>
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
