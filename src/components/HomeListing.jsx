import React from 'react'

function HomeListing({jobs}) {
    const firstFourJobs = jobs.slice(0, 8)

  return (
      <div className='home-listing'>
        <div className="home-listing-head">
          <h1 style={{color: '#545454'}}>Today's picks</h1>
          <button>See more</button>
        </div>
        <div className="home-job-container">
          {firstFourJobs.map(job => (
            <div className="home-job">
                <p style={{color: '#6e2594', marginBottom: '.5rem', textAlign: 'center'}}>{job.role}</p> 
                <p style={{textAlign: 'center', color:'#545454'}}>{job.company_name}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default HomeListing
