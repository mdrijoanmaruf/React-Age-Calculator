import { useState, useEffect, useRef } from 'react';

export const useAgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [ageData, setAgeData] = useState({
    years: 0,
    months: 0,
    days: 0,
    totalDays: 0,
    totalHours: 0,
    totalMinutes: 0,
    totalSeconds: 0,
    nextBirthday: '-'
  });
  const [error, setError] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const liveCounterInterval = useRef(null);

  // Set max date to today
  const today = new Date().toISOString().split('T')[0];

  // Function to calculate detailed age
  const getDetailedAge = (birthDate, currentDate) => {
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();
    
    // Adjust for negative days
    if (days < 0) {
      months--;
      const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      days += lastMonth.getDate();
    }
    
    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }
    
    // Calculate total days
    const timeDiff = currentDate.getTime() - birthDate.getTime();
    const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const totalHours = Math.floor(timeDiff / (1000 * 60 * 60));
    const totalMinutes = Math.floor(timeDiff / (1000 * 60));
    const totalSeconds = Math.floor(timeDiff / 1000);
    
    // Calculate next birthday
    const nextBirthday = getNextBirthday(birthDate, currentDate);
    
    return {
      years,
      months,
      days,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
      nextBirthday,
      birthDate
    };
  };

  // Function to get next birthday
  const getNextBirthday = (birthDate, currentDate) => {
    const nextBirthday = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    
    // If birthday has passed this year, set to next year
    if (nextBirthday < currentDate) {
      nextBirthday.setFullYear(currentDate.getFullYear() + 1);
    }
    
    // Calculate days until next birthday
    const timeDiff = nextBirthday.getTime() - currentDate.getTime();
    const daysUntil = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
    if (daysUntil === 0) {
      return "Today! 🎉";
    } else if (daysUntil === 1) {
      return "Tomorrow! 🎂";
    } else {
      return `${daysUntil} days`;
    }
  };

  // Function to format numbers with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  // Function to show error
  const showError = (message) => {
    setError(message);
    setTimeout(() => setError(''), 3000);
  };

  // Function to start live counter
  const startLiveCounter = (birthDate) => {
    if (liveCounterInterval.current) {
      clearInterval(liveCounterInterval.current);
    }
    
    liveCounterInterval.current = setInterval(() => {
      const now = new Date();
      const timeDiff = now.getTime() - birthDate.getTime();
      const totalSeconds = Math.floor(timeDiff / 1000);
      const totalMinutes = Math.floor(timeDiff / (1000 * 60));
      const totalHours = Math.floor(timeDiff / (1000 * 60 * 60));
      
      setAgeData(prev => ({
        ...prev,
        totalSeconds,
        totalMinutes,
        totalHours
      }));
    }, 1000);
  };

  // Function to calculate age
  const calculateAge = () => {
    if (!birthDate) {
      showError('Please select your birth date');
      return;
    }
    
    const birth = new Date(birthDate);
    const now = new Date();
    
    // Check if birth date is in the future
    if (birth > now) {
      showError('Birth date cannot be in the future');
      return;
    }
    
    // Calculate age
    const calculatedAge = getDetailedAge(birth, now);
    
    // Clear any existing live counter
    if (liveCounterInterval.current) {
      clearInterval(liveCounterInterval.current);
    }
    
    setIsAnimating(true);
    setAgeData(calculatedAge);
    setShowResults(true);
    
    // Start live counter after animation
    setTimeout(() => {
      startLiveCounter(birth);
      setIsAnimating(false);
    }, 1500);
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (liveCounterInterval.current) {
        clearInterval(liveCounterInterval.current);
      }
    };
  }, []);

  return {
    birthDate,
    setBirthDate,
    showResults,
    ageData,
    error,
    isAnimating,
    today,
    calculateAge,
    formatNumber
  };
};
