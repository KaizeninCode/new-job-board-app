import React from 'react'

function HomeListing({jobs}) {
    const firstFourJobs = jobs.slice(0, 8)

  return (
      <div className='home-listing'>
        <div className="home-listing-head">
          <h1>Today's picks</h1>
          <button>See more</button>
        </div>
        <div className="home-job-container">
          {firstFourJobs.map(job => (
            <div className="home-job" key={job.role}>
                <p style={{marginBottom: '.5rem', textAlign: 'center'}}>{job.role}</p> 
                <p style={{textAlign: 'center'}}>{job.company_name}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default HomeListing
