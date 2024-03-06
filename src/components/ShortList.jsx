import React, { useState } from 'react'
import Header from './Header'
import ShortListItem from './ShortListItem'
import Footer from './Footer'

function ShortList() {
    const [shortlist, setShortlist] = useState([])
    const [appliedJobs, setAppliedJobs] = useState([])

  function handleApply(job){
    setAppliedJobs(...appliedJobs, job.title)
    console.log(appliedJobs)
  }

  const handleRemove = (job) => {
    const filteredJobs = shortlist.filter(j => j.id !== job.id)
    setShortlist(filteredJobs)
  }

  return (
    <>
      <Header/>
      <div className='shortlist-container'>
        {shortlist.map(job => <ShortListItem  
          key={job.id} 
          shortlistedJobs={shortlist} 
          handleApplyClick={handleApply}
          handleRemove={handleRemove}
          />)}
      </div>
      <Footer/>
    </>
  )
         }
export default ShortList
