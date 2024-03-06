import React from 'react'

function ShortListItem({ shortlistedJobs ,handleRemove, handleApply }) {
  if (shortlistedJobs.length > 0) 
    return (
      shortlistedJobs.map(job => (
        <div className='shortlist-card'>
          <h2>{job.role}</h2>
          <p>{job.company_name}</p>
          {job.location ? <p>LOCATION: {job.location}</p> : null}
          {job.employment_type ? <p>TYPE: {job.employment_type}</p> : null}
          <div className="job-btns">
              <button onClick={handleApply}>Apply</button>
              <button onClick={handleRemove}>Remove from Shortlist</button>
          </div>
        </div>
      ))
    )
    else return (
      <div className="shortlist-card">
        <p>There is nothing in your shortlist yet.</p>
      </div>
    )
  }


export default ShortListItem
