import React from "react";

const Search = ({
  term,
  setTerm,
}: {
  term: string;
  setTerm: (val: string) => void;
}) => {
  return (
    <>
      {/* search component  */}
      <div className="flex items-end p-5">
        <label htmlFor="" className="text-gray-600">
          Search
        </label>
        <input
          type="text"
          className="p-1 border border-gray-300 rounded ml-3 hover:bg-gray-100 focus:border-indigo-300 focus:outline-none"
          placeholder="Seach Jobs ..."
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
