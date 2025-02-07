import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-[1300px] bg-gray-900 text-white p-4 flex justify-between">
      <Link to="/" className="text-amber-400 font-bold">
        Home
      </Link>
      <Link to="/add" className="text-amber-400 font-bold">
        Add Post
      </Link>
    </nav>
  );
};

export default Navbar;
