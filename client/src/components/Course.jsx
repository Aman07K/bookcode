import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import axios from "axios"
import { Link } from "react-router-dom"
function Course() {

  const [book, setBook]=useState([])

  useEffect(() => {
    const getBook = async () => {
      try {
        const res= await axios.get("http://localhost:4001/book");
        console.log("From the API", res.data);
        setBook(res.data);
      } catch (error) {
        console.log("This is the Actual Error",error);
      }
    };
      getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            W're delighted to have you{" "}
            <span className="text-pink-500">Here!:)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore landantium
            repellendus accusmus accusantium sed architecto odio, nisi expedite
            quas quidem nesciunt debitis dolore non aspernatur praesention
            assumendo sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards Key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
