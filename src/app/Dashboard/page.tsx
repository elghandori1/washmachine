'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from '../components/Dashboard';

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isLoggedIn') === 'true';
    if (!auth) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-white" dir='ltr'>Loading...</div>;
  }
  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto">
        <Dashboard onLogout={handleLogout} />
      </div>
    </div>
  );
}