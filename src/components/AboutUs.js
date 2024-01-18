import React from "react";

const AboutUs = () => {
 return (
    <div className="max-w-800 mx-auto px-20 py-10 bg-white">
      <h2 className="text-2xl text-blue-600 font-semibold mb-6">About Us</h2>
      <p className="text-base text-gray-800 mb-6">
        Welcome to HYGGEX Quiz, your go-to platform for fun and educational
        quizzes! We believe that learning can be an enjoyable experience, and
        our quizzes are designed to make studying more engaging for students of
        all ages.
      </p>
      <div className="mb-6">
        <h3 className="text-xl text-blue-600 font-semibold mb-4">Our Mission</h3>
        <p className="text-base text-gray-800">
          To provide a platform where students can enhance their knowledge and
          test their understanding of various subjects in a fun and interactive
          way.
        </p>
      </div>
    </div>
 );
};

export default AboutUs;