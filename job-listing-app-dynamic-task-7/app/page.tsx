import Link from "next/link";

export default async function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Your Next Opportunity 🚀
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Discover exciting roles, grow your skills, and take a step closer to your dream career. Your journey starts here.
        </p>
        <Link
          href="/jobs"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Browse Jobs
        </Link>
      </div>
    </main>
  );
}
