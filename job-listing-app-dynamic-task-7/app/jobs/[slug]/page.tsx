import { notFound } from "next/navigation";
import { TfiLocationPin } from "react-icons/tfi";
import { FiPlusCircle } from "react-icons/fi";
import { BsFire } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default async function JobDetail({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(
    `https://akil-backend.onrender.com/opportunities/${params.slug}`
  );

  if (!res.ok) return notFound();

  const json = await res.json();
  const job = json.data;

  const responsibilitiesArray = job.responsibilities
    ? job.responsibilities.split("\n")
    : [];

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
            {responsibilitiesArray.map((resp: string, i: number) => (
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
          <p className="text-gray-700 whitespace-pre-line">
            {job.idealCandidate}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
            When & Where
          </h2>
          <p className="text-gray-700">
            <span className="inline-block p-1 rounded-full border border-gray-300 text-sky-600 text-xl mr-2 align-middle">
              <TfiLocationPin />
            </span>
            {job.whenAndWhere}
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
      <p>{job.datePosted}</p>
    </div>
  </li>

  <li className="grid grid-cols-[auto_1fr] items-center gap-3">
    <div className="p-2 rounded-full border border-gray-300 text-sky-600 text-2xl">
      <BsFire />
    </div>
    <div>
      <p className="text-gray-500">Deadline:</p>
      <p>{job.deadline ? new Date(job.deadline).toLocaleDateString() : "N/A"}</p>
    </div>
  </li>

  <li className="grid grid-cols-[auto_1fr] items-center gap-3">
    <div className="p-2 rounded-full border border-gray-300 text-sky-600 text-2xl">
      <IoLocationOutline />
    </div>
    <div>
      <p className="text-gray-500">Location:</p>
      <p>{job.location.join(', ')}</p>
    </div>
  </li>

  <li className="grid grid-cols-[auto_1fr] items-center gap-3">
    <div className="p-2 rounded-full border border-gray-300 text-sky-600 text-2xl">
      <CiCalendarDate />
    </div>
    <div>
      <p className="text-gray-500">Start Date:</p>
      <p>{job.startDate ? new Date(job.startDate).toLocaleDateString() : "N/A"}</p>
    </div>
  </li>

  <li className="grid grid-cols-[auto_1fr] items-center gap-3">
    <div className="p-2 rounded-full border border-gray-300 text-sky-600 text-2xl">
      <MdOutlineDateRange />
    </div>
    <div>
      <p className="text-gray-500">End Date:</p>
      <p>{job.endDate ? new Date(job.endDate).toLocaleDateString() : "N/A"}</p>
    </div>
  </li>
</ul>

        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {job.categories.map((cat: string, i: number) => {
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
            {job.requiredSkills.map((skill: string, i: number) => (
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
