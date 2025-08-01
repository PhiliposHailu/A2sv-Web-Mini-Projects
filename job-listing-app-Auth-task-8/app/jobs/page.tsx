import JobList from "../components/JobList";

export default async function List() {

  const res = await fetch(
    "https://akil-backend.onrender.com/opportunities/search",
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch job data");
  }

  const json = await res.json();
  const jobs = await json.data;
  console.log(jobs);

  return (
    <main className="p-4">
      <JobList jobs={jobs} />
    </main>
  );
}
