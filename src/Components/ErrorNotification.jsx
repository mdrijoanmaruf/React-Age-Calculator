const ErrorNotification = ({ error }) => {
  if (!error) return null;

  return (
    <div className="fixed top-5 right-5 bg-red-500 text-white px-5 py-3 rounded-lg shadow-lg z-50 animate-slide-in-right">
      <div className="flex items-center gap-2">
        <span>⚠️</span>
        <span className="font-medium">{error}</span>
      </div>
    </div>
  );
};

export default ErrorNotification;
