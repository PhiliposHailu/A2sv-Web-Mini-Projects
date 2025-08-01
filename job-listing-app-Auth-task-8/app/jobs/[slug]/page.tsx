import JobDetailClient from "@/app/components/JobDetail";

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  return <JobDetailClient slug={params.slug} />;
}
