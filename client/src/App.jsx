import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Calendar from './components/Calendar';
import GradeSearch from './components/GradeSearch';
import CourseDetail from './components/CourseDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Professors from './components/Professors';
import StudySpots from './components/study_spot_code/StudySpots';
import WestBankPage from './components/study_spot_code/WestBankPage';
import EastBankPage from './components/study_spot_code/EastBankPage';
import StPaulPage from './components/study_spot_code/StPaulPage';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/professors" element={<Professors />} />
          <Route path="/grades" element={<GradeSearch />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/studyspots" element={<StudySpots />} />
          <Route path="/studyspots/westbank" element={<WestBankPage />} />
          <Route path="/studyspots/eastbank" element={<EastBankPage />} />
          <Route path="/studyspots/stpaul" element={<StPaulPage />} />
          <Route path="*" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;