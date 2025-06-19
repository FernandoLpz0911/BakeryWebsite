// src/App.jsx
import React from 'react';

const App = () => {
  return (
    <div className = "min-h-xcreen font-inter antialiased bg-[#f73ed]">
      {/* */}
      <div className="w-full bg-[#f4f1ed] py-2 text-center text-sm font-semibold text-gray-700 rounded-b-lg shadow-md">
        Placeholder Text 1
      </div>

      {/* Nav Bar */}
      <nav className="bg-white p-4 shadow-md rounded-b-lg">
        <div className="container mx-auto flex justify-between items-center">

          {/* Nav Bar Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-[#4a4a4a] font-semibold transition duration-300 hover:text-[#1a202c]">COOKIES & GIFTS</a>
            <a href="#" className="text-[#4a4a4a] font-semibold transition duration-300 hover:text-[#1a202c]">ORDER</a>
            <a href="#" className="text-[#4a4a4a] font-semibold transition duration-300 hover:text-[#1a202c]">BAKERIES</a>
            <a href="#" className="text-[#4a4a4a] font-semibold transition duration-300 hover:text-[#1a202c]">ABOUT</a>
          </div>
          {/* Bakery Logo */}
          <div className="text-2xl font-bold text-gray-800">Company<span className="text-blue-600"> Bakery</span></div>
          {/* NavBar Icons */}
          <div className="flex space-x-4 items-center">
            {/* User Icon, NEEDS TO BE INSERTED*/}
            {/* Shopping bag icon, NEEDS TO BE INSERTED */}
          </div>
        </div>
      </nav>

      {/* Side picture section */}
      <div className="bg-[#e0f2f7] flex flex-col md:flex-row items-center justify-center py-12 md:py-24 px-4 rounded-lg shadow-lg m-4">
        {/* Left Section, image and small tag in corner */}
      </div>

    </div>
  );
};

export default App;
