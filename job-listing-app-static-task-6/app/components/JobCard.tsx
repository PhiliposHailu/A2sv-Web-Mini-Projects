import JobListType from "../types/JobListType";

export default function JobCard({ job }: { job: JobListType }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <img
          src={job.image}
          alt={job.company}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1 space-y-1">
          <h2 className="text-lg font-bold">{job.title}</h2>
          <p className="text-sm text-gray-400">
            {job.company} • {job.about.location}
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
    </div>
  );
}
