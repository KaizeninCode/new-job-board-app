import React, { useEffect, useState } from 'react'
import Header from './Header'
import ShortListItem from './ShortListItem'
import Footer from './Footer'

function ShortList() {
    const [shortlist, setShortlist] = useState([])
  const [appliedJobs, setAppliedJobs] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/shortlist')
    .then(response => response.json())
    .then(data => setShortlist(data))
  }, [])

  function handleShortlistClick(job) {
    fetch(`http://localhost:3000/shortlist/${job.id}`, {
      method: 'DELETE',
    })
  }
  function handleApplyClick(job){
    fetch('http://localhost:3000/applied', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(job),
        })
        .then((response) => response.json())
        .then((data) => {
          setAppliedJobs([...appliedJobs, data]);
        })
  }

  return (
    <>
      <Header/>
      <div className='shortlist-container'>
        {shortlist.map(job => <ShortListItem  
          key={job.id} 
          job={job} 
          handleShortlistClick={handleShortlistClick}
          handleApplyClick={handleApplyClick}
          />)}
      </div>
      <Footer/>
    </>
  )
         }
export default ShortList
