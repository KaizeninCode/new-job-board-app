import React, { useState } from 'react';
import JobItem from './JobItem';
import Header from './Header';
import JobDetails from './JobDetails';
import Footer from './Footer';
import SearchBar from './SearchBar';

const JobList = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [shortlistedJobs, setShortlistedJobs] = useState([]);

  const addToShortlist = (job) => {
      setShortlistedJobs([shortlistedJobs.push(job)]);
  };

  return (
    <>
      <SearchBar/>
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
    </>
  );
};

export default JobList;