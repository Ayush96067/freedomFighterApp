import React from "react";
import { Link } from "react-router-dom";

function ContactForm() {
  return (
    <div className="text-black h-[100vh] bg-gray-100 dark:bg-black relative top-10">
      <div className="hero min-h-screen bg-hero-pattern dark:bg-hero-pattern-dark">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="card text-neutral-content w-auto">
            <div className="card-body bg-[#0000006b] dark:bg-[#ffffff2c] rounded-2xl items-center text-center text-white">
              <h2 className="card-title mb-3 md:mb-10">Contact Us</h2>
              <div className="mb-3">
                <span className="md:text-xl mr-5 md:mr-1">Name</span>
                <input
                  type="text"
                  placeholder="Enter your name.."
                  className="my-auto md:ml-20 p-1 ml-3  md:p-3 w-32 md:w-auto text-white dark:text-black dark:bg-gray-300 rounded-md"
                />
              </div>
              <div className="mb-3">
                <span className="md:text-xl mr-9 md:mr-3">Email</span>
                <input
                  type="email"
                  placeholder="Enter your name.."
                  className="my-auto md:ml-20 p-1  md:p-3 w-32 md:w-auto text-white dark:text-black dark:bg-gray-300 rounded-md"
                />
              </div>
              <div>
                <span className="md:text-xl mr-7  md:mr-1">Phone</span>
                <input
                  type="text"
                  placeholder="Enter your name.."
                  className="my-auto md:ml-20 p-1  md:p-3 w-32 md:w-auto text-white dark:text-black dark:bg-gray-300 rounded-md"
                />
              </div>
              <div>
                <textarea
                  className="textarea textarea-warning dark:bg-gray-300 bg-black w-52 md:w-96 md:h-48 my-4"
                  placeholder="any query or suggestions....."
                ></textarea>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Submit</button>
                <button className="btn btn-ghost">
                  <Link to="/"> Back</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
