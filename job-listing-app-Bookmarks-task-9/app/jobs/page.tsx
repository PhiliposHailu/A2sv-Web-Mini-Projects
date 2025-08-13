import JobListClient from "../components/JobListClient";

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

  return (
    <>
      <JobListClient jobs={jobs} />
    </>
  );
}
