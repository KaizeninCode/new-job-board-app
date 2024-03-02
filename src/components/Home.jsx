import React from 'react'
import HomeListing from './HomeListing'

function Home({jobs}) {
  return (
      <div className='home'>
        <div className="home-btns">
          <div className="name">
            <p>Firstname Lastname</p>
          </div>
          <div className="cv-btn">
            <p>Got your CV?</p>
            <button>Upload</button>
            <button>Create</button>
          </div>
          <div className="shortlist-btn">
            <p>Found something?</p>
            <button>View Shortlist</button>
          </div>
        </div>
        <HomeListing jobs={jobs}/>
      </div>
  )
}

export default Home
