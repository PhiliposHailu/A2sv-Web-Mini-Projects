'use client';

import { useAuthRedirect } from '@/app/components/useAuthRedirect';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  useAuthRedirect();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    const storedUsername = localStorage.getItem('userName');

    if (storedEmail) setEmail(storedEmail);
    if (storedUsername) setUsername(storedUsername);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {username ? `Welcome, ${username}! 🎉` : 'Welcome to Your Next Opportunity 🚀'}
        </h1>
        {email && (
          <p className="text-gray-600 mb-4 text-md">Signed in as: <strong>{email}</strong></p>
        )}
        <p className="text-gray-600 mb-8 text-lg">
          Discover exciting roles, grow your skills, and take a step closer to
          your dream career. Your journey starts here.
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
