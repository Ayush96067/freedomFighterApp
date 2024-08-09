import React, { useEffect, useState } from "react";
import Fight from "./Fight";
import axios from "axios";

function More() {
  const [fighter, setFighter] = useState([]);

  useEffect(() => {
    const getFighter = async () => {
      try {
        const res = await axios.get("http://localhost:3000/fight");
        setFighter(res.data);
      } catch (error) {
        console.log("Error : 😂 ", error);
      }
    };

    getFighter();
  }, []);

  return (
    <>
      <div
        style={{ marginTop: "4.2rem" }}
        className="w-full md:mx-auto my-16 md:my-1 md:px-24 md:py-9 "
      >
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl text-black dark:text-white">
            More Details About
            <span className="text-lime-300"> Legends 💪 </span>
          </h1>
          <p className="mt-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fuga,
            impedit illo quam quia in dolores possimus nulla aliquid. Repellat
            quas ratione esse sapiente dolores vitae, ut totam dolorum veniam
            voluptatibus voluptates ad aliquam natus? Nemo laudantium, et
            deserunt magni quas ad quod totam natus vel. Saepe iste quia
            ratione! Tempore, recusandae officiis sapiente placeat aliquam
            repudiandae nesciunt doloremque dolorum.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {fighter.map((item) => {
            return <Fight item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default More;
