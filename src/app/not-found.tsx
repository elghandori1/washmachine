import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-500 mb-6">Sorry, the page you are looking for doesn't exist.</p>
        </div>

        <div className="space-y-4">
          <Link 
            href="/"
            className="w-full inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition duration-200"
          >
            ← Back to Home
          </Link>
          
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            If you believe this is an error, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
}