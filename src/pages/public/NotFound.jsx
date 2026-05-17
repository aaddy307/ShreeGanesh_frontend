import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="py-20">
      <div className="container-custom text-center">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-4xl font-bold text-primary mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Go to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;