import React from 'react'

const JobPosting = ({url,company,created_at,title}) => {
    const formattedTime= new Date(created_at*1000)

  return (
    <div className='custom-post' role='list-item'>
      <h2 className='custom-post__title'>
        
        <a className={ url ?"":"inactiveLink"}
           href={url}
           target='_blank'
           rel='noopener'
        >
            {title}
        </a>
         </h2>

         <span className='custom-post__metadata'>
            By {company} - {formattedTime.toLocaleDateString()}
         </span>
    </div>
  )
}

export default JobPosting
