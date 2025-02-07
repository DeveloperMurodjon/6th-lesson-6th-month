import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";

function App() {
  return (
    <div className="max-w-[1300px] px-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/add" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
