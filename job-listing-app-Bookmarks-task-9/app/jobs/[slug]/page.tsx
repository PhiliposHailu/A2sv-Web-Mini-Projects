import JobDetailClient from "@/app/components/JobDetail";
import LogoutButton from "@/app/components/LogoutButton";

export default async function JobDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const resolveParams = await params;
  return (
    <>
      <LogoutButton />
      <JobDetailClient slug={resolveParams.slug} />;
    </>
  );
}
