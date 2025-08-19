import { job_postings } from "@/public/data/jobs";
import { notFound } from "next/navigation";
import JobDescriptionType from "@/app/types/JobDescriptionType";
import { TfiLocationPin } from "react-icons/tfi";
import { FiPlusCircle } from "react-icons/fi";
import { BsFire } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function JobDetail({ params }: { params: { slug: string } }) {
  const index = parseInt(params.slug);
  const count = job_postings.length;
  if (index >= count || index < 0) return notFound();

  const job: JobDescriptionType = job_postings[index];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <div className="md:col-span-2 space-y-8">
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Description
          </h2>
          <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Responsibilities
          </h2>
          <ul className="space-y-2 text-gray-700">
            {job.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-2">
                <IoCheckmarkCircleOutline className="text-green-400 mt-1" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            Ideal Candidate We Want
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li className="font-bold mb-2">
              Young ({job.ideal_candidate.age} years old){" "}
              {job.ideal_candidate.gender} {job.title}
            </li>
            {job.ideal_candidate.traits.map((trait, i) => {
              const [label, rest] = trait.split(":");
              return (
                <li key={i}>
                  <strong>{label.trim()}:</strong> {rest?.trim()}
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            When & Where
          </h2>
          <p className="text-gray-700">
  <span className="inline-block p-1 rounded-full border border-gray-300 text-sky-600 text-xl mr-2 align-middle">
    <TfiLocationPin />
  </span>
  {job.when_where}
</p>

        </section>
      </div>

      <aside className="space-y-6 bg-gray-50 rounded-xl p-6 shadow">
        <section>
          <h3 className="font-semibold mb-2">About</h3>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="grid grid-cols-[auto_1fr] items-center gap-3">
              <div className="p-2 rounded-full border border-gray-300 text-sky-600 text-2xl">
                <FiPlusCircle />
              </div>
              <div>
                <p className="text-gray-500">Posted on:</p>
                <p>{job.about.posted_on}</p>
              </div>
            </li>

            <li className="grid grid-cols-[auto_1fr] items-center gap-3">
              <div className="p-2 rounded-full border border-gray-300 text-sky-600 text-2xl">
                <BsFire />
              </div>
              <div>
                <p className="text-gray-500">Deadline:</p>
                <p>{job.about.deadline}</p>
              </div>
            </li>

            <li className="grid grid-cols-[auto_1fr] items-center gap-3">
              <div className="p-2 rounded-full border border-gray-300 text-sky-600 text-2xl">
                <IoLocationOutline />
              </div>
              <div>
                <p className="text-gray-500">Location:</p>
                <p>{job.about.location}</p>
              </div>
            </li>

            <li className="grid grid-cols-[auto_1fr] items-center gap-3">
              <div className="p-2 rounded-full border border-gray-300 text-sky-600 text-2xl">
                <CiCalendarDate />
              </div>
              <div>
                <p className="text-gray-500">Start Date:</p>
                <p>{job.about.start_date}</p>
              </div>
            </li>

            <li className="grid grid-cols-[auto_1fr] items-center gap-3">
              <div className="p-2 rounded-full border border-gray-300 text-sky-600 text-2xl">
                <MdOutlineDateRange />
              </div>
              <div>
                <p className="text-gray-500">End Date:</p>
                <p>{job.about.end_date}</p>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {job.about.categories.map((cat, i) => {
              const colors = [
                { text: "text-yellow-500", bg: "bg-yellow-100" },
                { text: "text-green-700", bg: "bg-green-100" },
                { text: "text-purple-700", bg: "bg-purple-100" },
              ];

              const color = colors[i % colors.length];

              return (
                <span
                  key={i}
                  className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs`}
                >
                  {cat}
                </span>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {job.about.required_skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-purple-100 text-purple-900 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </aside>
    </div>
  );
}
