import React from 'react'

function HomeListing({jobs}) {
    const firstFourJobs = jobs.slice(0, 4)

  return (
    <div className='home-listing'>
      {firstFourJobs.map(job => (
        <div className="home-job">
            <p>{job.role}</p>
        </div>
      ))}
      <button>See more</button>
    </div>
  )
}

export default HomeListing
