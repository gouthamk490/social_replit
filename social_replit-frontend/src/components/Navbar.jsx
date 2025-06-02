import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">Social Replit</Link>
      <div className="space-x-4">
        <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-blue-500">Register</Link>
      </div>
    </nav>
  );
}
