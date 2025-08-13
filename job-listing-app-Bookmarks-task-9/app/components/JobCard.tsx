import { useState, useEffect } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useRouter } from "next/navigation";
import JobType from "../types/JobType";

interface JobCardProps {
  job: JobType;
  bookmarked: boolean;
}

export default function JobCard({ job, bookmarked }: JobCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);

  useEffect(() => {
    setIsBookmarked(bookmarked);
  }, [bookmarked]);

  const router = useRouter();
  const handleToggleBookmark = async (e: React.MouseEvent) => {
    e.preventDefault(); // prevent Link navigation on button click

    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const method = isBookmarked ? "DELETE" : "POST";
      const res = await fetch(
        `https://akil-backend.onrender.com/bookmarks/${job.id}`,
        {
          method,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(res)

      if (!res.ok) {
        throw new Error("Bookmark action failed");
      }
      setIsBookmarked(!isBookmarked);
    } catch (err) {
      alert("Failed to update bookmark. Try again.");
    }
  };

  return (
    <div
      data-cy="job-card"
      className="relative bg-white p-4 rounded-xl shadow border border-gray-200 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start gap-4">
        <img
          src={job.logoUrl ? job.logoUrl : "/imgs/pic2.jpg"}
          alt={job.orgName}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1 space-y-1">
          <h2 className="text-lg font-bold">{job.title}</h2>
          <p className="text-sm text-gray-400">
            {job.orgName} • {job.location.join(", ")}
          </p>
          <p className="text-gray-700 text-1xl line-clamp-3 pt-1">
            {job.description}
          </p>
          <div className="flex items-center gap-2 text-xs pt-1">
            <span className="px-2 py-1 text-green-600 bg-green-100 rounded-full font-medium">
              In Person
            </span>
            <span className="inline-block w-px h-4 bg-gray-300"></span>
            <span className="border-1 px-2 py-1 text-yellow-500 rounded-full font-medium">
              Education
            </span>
            <span className="border-1 px-4 py-1 text-purple-500 rounded-full font-medium">
              IT
            </span>
          </div>
        </div>
      </div>

      {/* Bookmark Toggle Button */}
      <button
        data-cy="bookmark-btn"
        onClick={handleToggleBookmark}
        className="absolute top-3 right-3 text-indigo-900 text-xl"
        aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
      >
        {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
      </button>
    </div>
  );
}
