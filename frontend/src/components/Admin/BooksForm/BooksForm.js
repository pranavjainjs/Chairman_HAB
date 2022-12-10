import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BooksForm = ({ type, formData }) => {
  const [title, setTitle] = useState(
    formData && formData.title ? formData.title : ""
  );

  const [name, setname] = useState(
    formData && formData.name ? formData.name : ""
  );

  const [body, setbody] = useState(
    formData && formData.body ? formData.body : ""
  );

  let navigate = useNavigate();
  return (
    <>
      <h1 className="text-3xl text-black pb-6">{type} Books</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
          <p className="text-xl pb-6 flex items-center">
            <i className="fas fa-list mr-3"></i>
          </p>
          <div className="leading-loose">
            <form
              className="p-10 bg-white rounded shadow-xl"
              // onSubmit={(e) => formSubmitHandler(e)}
            >
              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="Title">
                  Title
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="title"
                  name="title"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="name"
                  name="name"
                  type="text"
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="body">
                  Body
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="body"
                  name="body"
                  type="text"
                  onChange={(e) => setbody(e.target.value)}
                  value={body}
                  required
                />
              </div>
              
              <div className="mt-6">
                <button
                  className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksForm;