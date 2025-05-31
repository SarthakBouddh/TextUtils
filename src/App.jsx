import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [alert, setAlert] = useState('');

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => setAlert(''), 2000);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      showAlert("Dark Mode On");
    } else {
      showAlert("Light Mode On");
    }
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <TextForm heading="Enter your text" showAlert={showAlert} />
      {/* Show the alert
      <Alert alert={alert} />

      <Routes>
        <Route path='/' element={} />
        <Route path='/about' element={<About />} />
      </Routes> */}
    </>
  );
}

export default App;
