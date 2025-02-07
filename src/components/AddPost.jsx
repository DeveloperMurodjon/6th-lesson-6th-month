import React, { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPost = () => {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      userId: 1,
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/posts`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Post muvaffaqiyatli qo'shildi");
      titleRef.current.value = "";
      bodyRef.current.value = "";
    } catch (error) {
      toast.error("Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-[1300px] mx-auto p-4">
      <form
        onSubmit={handleSend}
        className="bg-gray-900 p-4 rounded-md shadow-lg text-white max-w-md mx-auto"
      >
        <input
          ref={titleRef}
          type="text"
          placeholder="Enter title..."
          className="w-full p-2 mb-2 bg-gray-800 text-white rounded-md"
          required
        />
        <textarea
          ref={bodyRef}
          placeholder="Enter body..."
          className="w-full p-2 bg-gray-800 text-white rounded-md"
          required
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="bg-amber-600 text-white px-4 py-2 rounded-md mt-4 w-full"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddPost;
