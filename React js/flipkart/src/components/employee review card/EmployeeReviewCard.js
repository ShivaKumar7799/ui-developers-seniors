import React from 'react'
import './EmployeeCardStyles.css'

function EmployeeReviewCard({image,review,name}) {
  return (
    <div className='employee_card_container' >
        <div className='image_block' >
            <img src={image} alt="employee" />
        </div>
        <div className='review_block' >
            <p>{review}</p>
            <h4>{name}</h4>
        </div>
    </div>
  )
}

export default EmployeeReviewCard