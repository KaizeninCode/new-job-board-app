import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import JobList from './components/JobList';
// import JobDetails from './components/JobDetails';
// import ApplyForm from './components/ApplyForm';
import Home from './components/Home';
import ShortList from './components/ShortList';
import Login from './components/Login';  
import SignUp from './components/SignUp';
import About from './components/About';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = () => {
    fetch('http://localhost:3000/results')
    .then(res => res.json())
    .then(data => {
      setJobs(data)
      console.log(data)
    })
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<Home jobs={jobs}/>}/>
          <Route path="/job-list" element={<JobList jobs={jobs} />}/>  
          <Route path="/shortlist" element={<ShortList />}/>  
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </Router>
   );
}

export default App;
