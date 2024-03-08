import React, { useState } from 'react';
import JobItem from './JobItem';
import Header from './Header';
import JobDetails from './JobDetails';
import Footer from './Footer';

const JobList = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [shortlistedJobs, setShortlistedJobs] = useState([]);

  const addToShortlist = (job) => {
    fetch('http://localhost:3000/shortlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
      .then((response) => response.json())
      .then((data) => {
        setShortlistedJobs([...shortlistedJobs, data]);
      })

  };

  return (
    <div className='job-container'>
      {selectedJob ? (
        <JobDetails 
        job={selectedJob} 
        setSelectedJob={setSelectedJob} 
        addToShortlist={addToShortlist}
        />
        ) : (
          jobs.map((job) => (
            <JobItem
            key={job.id}
            job={job}
            selectedJob={selectedJob}
            setSelectedJob={setSelectedJob}              
            />
            ))
            )}
    </div>
  );
};

export default JobList;