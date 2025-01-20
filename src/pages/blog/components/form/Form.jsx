import React, { useState } from "react";

const Form = ({ heading, onSubmit }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "",
    subtitle: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };
  return (
    <>
      <div className="max-w-2xl my-6 shadow-2xl p-20 mx-auto">
        <h1 className="text-4xl font-sans font-bold my-6">{heading}</h1>
        <form action="" className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <div className="one flex space-x-4 space-y">
            <input type="text" placeholder="Title*" name="title" className="w-60 p-2 bg-gray-200 rounded" onChange={handleChange} />
            <input type="text" placeholder="Subtitle*" name="subtitle" className="w-60 p-2 bg-gray-200 rounded " onChange={handleChange} />
          </div>
          <div className="two flex space-x-4 ">
            <input type="file" placeholder="" name="image" className="w-60 p-2 bg-gray-200 rounded text-sm " onChange={handleChange} />
            <input type="text" placeholder="Category*" name="category" className="w-60 p-2 bg-gray-200 rounded " onChange={handleChange} />
          </div>
          <div className="description">
            <textarea name="description" id="description" rows="50" cols="50" className="bg-gray-200 rounded p-2 h-36" placeholder="Description*" onChange={handleChange}></textarea>
          </div>
          <div className="button">
            <button className="bg-blue-600 text-bold inline  px-6 py-2 text-white rounded hover:bg-blue-700 mt-2 ">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
