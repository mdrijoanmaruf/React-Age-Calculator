const AgeResultsSection = ({ ageData, showResults, isAnimating, formatNumber }) => {
  if (!showResults) return null;

  return (
    <div className={`transition-all duration-500 mb-8 ${showResults ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
      {/* Age Display Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl mb-8">
        <h2 className="text-2xl font-semibold mb-6">Your Age</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="flex flex-col items-center min-w-[80px]">
            <span className={`text-4xl font-bold leading-none mb-2 ${isAnimating ? 'animate-count-up' : ''}`}>
              {formatNumber(ageData.years)}
            </span>
            <span className="text-sm font-normal opacity-90 uppercase tracking-wide">Years</span>
          </div>
          <div className="flex flex-col items-center min-w-[80px]">
            <span className={`text-4xl font-bold leading-none mb-2 ${isAnimating ? 'animate-count-up' : ''}`}>
              {formatNumber(ageData.months)}
            </span>
            <span className="text-sm font-normal opacity-90 uppercase tracking-wide">Months</span>
          </div>
          <div className="flex flex-col items-center min-w-[80px]">
            <span className={`text-4xl font-bold leading-none mb-2 ${isAnimating ? 'animate-count-up' : ''}`}>
              {formatNumber(ageData.days)}
            </span>
            <span className="text-sm font-normal opacity-90 uppercase tracking-wide">Days</span>
          </div>
        </div>
      </div>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {/* Total Days Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">📅</span>
            </div>
            <span className="text-sm text-gray-600 font-medium mb-2 uppercase tracking-wide">Total Days</span>
            <span className={`text-2xl font-bold text-blue-600 ${isAnimating ? 'animate-count-up' : ''}`}>
              {formatNumber(ageData.totalDays)}
            </span>
          </div>
        </div>

        {/* Total Hours Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">🕐</span>
            </div>
            <span className="text-sm text-gray-600 font-medium mb-2 uppercase tracking-wide">Total Hours</span>
            <span className={`text-2xl font-bold text-green-600 ${isAnimating ? 'animate-count-up' : ''}`}>
              {formatNumber(ageData.totalHours)}
            </span>
          </div>
        </div>

        {/* Total Minutes Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">⏰</span>
            </div>
            <span className="text-sm text-gray-600 font-medium mb-2 uppercase tracking-wide">Total Minutes</span>
            <span className={`text-2xl font-bold text-yellow-600 ${isAnimating ? 'animate-count-up' : ''}`}>
              {formatNumber(ageData.totalMinutes)}
            </span>
          </div>
        </div>

        {/* Total Seconds Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">⏱️</span>
            </div>
            <span className="text-sm text-gray-600 font-medium mb-2 uppercase tracking-wide">Total Seconds</span>
            <span className="text-2xl font-bold text-red-600 transition-transform duration-100">
              {formatNumber(ageData.totalSeconds)}
            </span>
          </div>
        </div>

        {/* Next Birthday Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">🎂</span>
            </div>
            <span className="text-sm text-gray-600 font-medium mb-2 uppercase tracking-wide">Next Birthday</span>
            <span className={`text-2xl font-bold text-purple-600 ${isAnimating ? 'animate-count-up' : ''}`}>
              {ageData.nextBirthday}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeResultsSection;
