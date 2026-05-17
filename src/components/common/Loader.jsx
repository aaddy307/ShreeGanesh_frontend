const Loader = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className={`animate-spin rounded-full border-b-2 border-secondary ${sizeClasses[size]}`}></div>
    </div>
  );
};

export default Loader;