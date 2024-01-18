import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Flashcard = () => {
  const params = useLocation();
  const [bool, setBool] = useState(true);

  useEffect(() => {
    setBool(params.pathname === "/flashcard" ? true : false);
  }, [params.pathname]);

  return (
    <>
      {bool && (
        <div className="flex flex-wrap justify-center">
          <Link
            to="science"
            className="bg-f2f2f2 rounded-md shadow-md w-full md:w-1/3 mx-2 p-4 box-border flex flex-col items-center text-center transition-transform hover:transform-hover"
          >
            <h3 className="mb-2 text-2xl">Science</h3>
            <p className="mb-2 text-4xl font-bold">191</p>
            <p className="text-sm text-gray-600">22 Topics | 15 Past papers</p>
          </Link>
          <Link
            to="mathematics"
            className="bg-f2f2f2 rounded-md shadow-md w-full md:w-1/3 mx-2 p-4 box-border flex flex-col items-center text-center transition-transform hover:transform-hover"
          >
            <h3 className="mb-2 text-2xl">Mathematics</h3>
            <p className="mb-2 text-4xl font-bold">8</p>
            <p className="text-sm text-gray-600">10 Topics | 5 Past papers</p>
          </Link>
          <Link
            to="socialstudies"
            className="bg-f2f2f2 rounded-md shadow-md w-full md:w-1/3 mx-2 p-4 box-border flex flex-col items-center text-center transition-transform hover:transform-hover"
          >
            <h3 className="mb-2 text-2xl">Social Studies</h3>
            <p className="mb-2 text-4xl font-bold">12</p>
            <p className="text-sm text-gray-600">8 Topics | 4 Past papers</p>
          </Link>
          <Link
            to="english"
            className="bg-f2f2f2 rounded-md shadow-md w-full md:w-1/3 mx-2 p-4 box-border flex flex-col items-center text-center transition-transform hover:transform-hover"
          >
            <h3 className="mb-2 text-2xl">English</h3>
            <p className="mb-2 text-4xl font-bold">50</p>
            <p className="text-sm text-gray-600">10 Topics | 5 Past papers</p>
          </Link>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Flashcard;
