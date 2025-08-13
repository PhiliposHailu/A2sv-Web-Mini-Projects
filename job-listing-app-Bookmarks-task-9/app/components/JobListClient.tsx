"use client";
import JobList from "../components/JobList";
import LogoutButton from "../components/LogoutButton";
import { useState } from "react";
import Search from "../components/Search";
import JobType from "../types/JobType";

export default function JobListClient({jobs}: {jobs : JobType[]}) {
  const [term, setTerm] = useState("");

  console.log(term);

  return (
    <>
      <LogoutButton />
      {/* Header  */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-5">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-1">
            Opportunities
          </h1>
          <p className="text-gray-500 text-sm">Showing {jobs.length} results</p>
        </div>
        <div className="mt-2 md:mt-0">
          <label className="text-sm text-gray-600 mr-2 font-medium">
            Sort by:
          </label>
          <select className=" py-1 text-1xl">
            <option value="most-relevant">Most Relevant</option>
            <option value="least-relevant">Least Relevant</option>
          </select>
        </div>
      </div>
      <Search term={term} setTerm={setTerm}/>
      <main className="p-4">
        <JobList jobs={jobs} term={term}/>
      </main>
    </>
  );
}
