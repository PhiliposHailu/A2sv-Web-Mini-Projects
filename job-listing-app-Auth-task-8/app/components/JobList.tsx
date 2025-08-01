"use client";

import JobType from "../types/JobType";
import JobCard from "./JobCard";
import Link from "next/link";
import { useState } from "react";
import { useAuthRedirect } from "./useAuthRedirect";

const JobList = ({ jobs }: { jobs: JobType[] }) => {
  useAuthRedirect();
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
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

      <div className="grid gap-4">
        {jobs.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`}>
            <JobCard job={job} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JobList;
