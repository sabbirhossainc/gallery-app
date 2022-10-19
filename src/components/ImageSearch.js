import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="col-span-6 max-w-sm md:max-w-full flex items-center justify-around py-5 mx-auto">
      <form className="w-full max-w-sm md:max-w-6xl" onSubmit={onSubmit}>
        <div className="flex items-center border-dotted border-b-2 border-indigo-300 py-2 space-x-2 gap-4">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Search Image Term..."
            className="w-full sm:text-sm focus:outline-2 focus:outline-indigo-500 bg-slate-200 p-2 shadow-md rounded-md"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-teal-500 text-slate-50 px-3 py-1 ring-2 ring-offset-1 shadow-md rounded-md ring-indigo-500 hover:ring-teal-500 duration-100"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
