import React from "react";

function Fight({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3  ">
        <div className="card glass  bg-slate-100 shadow-2xl dark:bg-black md:w-92 md:my-10 my-7 hover:scale-105 transition-all duration-500 ease-in-out ">
          <figure>
            <img
              src={item.image}
              alt={item.name}
              className="w-80 h-72 object-cover p-2 m-2"
            />
          </figure>
          <div className="card-body h-72 p-3 text-black dark:text-white">
            <h2 className="card-title font-bold">{item.name}</h2>
            <p>{item.title}</p>
            <button className="btn btn-outline text-xl btn-info">
              More...
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fight;
