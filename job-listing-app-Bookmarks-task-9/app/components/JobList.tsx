"use client";

import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Link from "next/link";
import JobType from "../types/JobType";
import { fetchBookmarks } from "@/public/utils/bookmarksLogic";

interface JobListProps {
  jobs: JobType[];
  term: string;
}

export default function JobList({ jobs, term }: JobListProps) {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const filteredJobs = jobs.filter((job) => {
    return job.title.toLowerCase().includes(term.toLowerCase());
  });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;
    const loadBookmarks = async () => {
      try {
        const ids = await fetchBookmarks(token);
        setBookmarkedIds(ids);
      } catch (error) {
        console.error("Failed to load bookmarks", error);
      }
    };

    loadBookmarks();
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {filteredJobs.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`}>
            <JobCard job={job} bookmarked={bookmarkedIds.includes(job.id)} />
          </Link>
        ))}
      </div>
    </div>
  );
}
