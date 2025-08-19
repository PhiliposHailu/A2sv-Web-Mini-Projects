import JobList from "../components/JobList";
import { job_postings } from "@/public/data/jobs";

export default async function Home() {
  return (
    <main className="p-4">
      <JobList jobs={job_postings} />
    </main>
  );
}
