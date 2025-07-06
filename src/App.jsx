import './App.css'
import { useAgeCalculator } from './hooks/useAgeCalculator'
import AgeCalculatorHeader from './components/AgeCalculatorHeader'
import AgeInputSection from './components/AgeInputSection'
import AgeResultsSection from './components/AgeResultsSection'
import ErrorNotification from './components/ErrorNotification'
import Footer from './components/Footer'

function App() {
  const {
    birthDate,
    setBirthDate,
    showResults,
    ageData,
    error,
    isAnimating,
    today,
    calculateAge,
    formatNumber
  } = useAgeCalculator()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700 flex items-center justify-center p-5 font-['Poppins']">
      <ErrorNotification error={error} />

      <div className="w-full max-w-2xl">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-10 text-center hover:transform hover:-translate-y-1 transition-all duration-300 animate-fade-in">
          <AgeCalculatorHeader />
          
          <AgeInputSection
            birthDate={birthDate}
            setBirthDate={setBirthDate}
            onCalculate={calculateAge}
            today={today}
          />

          <AgeResultsSection
            ageData={ageData}
            showResults={showResults}
            isAnimating={isAnimating}
            formatNumber={formatNumber}
          />

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
