import React, { useEffect, useState } from "react";
import axiosInstance from "../services/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import Loader from "./loader";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/posts")
      .then((response) => {
        setPosts(response.data);
        toast.success("Ma'lumotlar yuklandi");
      })
      .catch(() => toast.error("Xatolik yuz berdi"))
      .finally(() => setLoading(false));
  }, []);

  const deletePost = (id) => {
    axiosInstance
      .delete(`/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
        toast.success("Post o'chirildi");
      })
      .catch(() => toast.error("O'chirishda xatolik yuz berdi"));
  };

  return (
    <div className="container flex flex-wrap  gap-3 mx-auto p-4">
      {loading ? (
        <Loader />
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="max-w-[300px] flex flex-col justify-between p-4 bg-gray-900 text-white rounded-md shadow-lg mb-4"
          >
            <h3 className="text-lg font-semibold text-amber-300">
              {post.title}
            </h3>
            <p className="text-gray-400">{post.body}</p>
            <button
              onClick={() => deletePost(post.id)}
              className="bg-red-600 text-white px-3 py-1 rounded-md mt-2"
            >
              Delete
            </button>
          </div>
        ))
      )}
      <ToastContainer />
    </div>
  );
};

export default PostList;
