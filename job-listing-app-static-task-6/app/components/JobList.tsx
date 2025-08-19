"use client";

import JobListType from "../types/JobListType";
import JobCard from "./JobCard";
import Link from "next/link";
import { useState } from "react";

const JobList = ({ jobs }: { jobs: JobListType[] }) => {
  const [sortOrder, setSortOrder] = useState("most-relevant");

  const sortedJobs = [...jobs];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-1">Opportunities</h1>
          <p className="text-gray-500 text-sm">
            Showing {jobs.length} results
          </p>
        </div>
        <div className="mt-2 md:mt-0">
          <label className="text-sm text-gray-600 mr-2 font-medium">
            Sort by:
          </label>
          <select
            className=" py-1 text-1xl"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="most-relevant">Most Relevant</option>
            <option value="least-relevant">Least Relevant</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4">
        {sortedJobs.map((job, index) => (
          <Link key={index} href={`/jobs/${index}`}>
            <JobCard job={job} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JobList;
