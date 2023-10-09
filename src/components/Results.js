import React from 'react'
import './Results.css'

export const Results = ({age}) => {
  return (
    
    <div className='results'>
        <h1> <span className='ageNumber'>{age.yearsOld}</span> years</h1>
        <h1><span className='ageNumber'>{age.monthsOld}</span> months</h1>
        <h1><span className='ageNumber'>{age.daysOld}</span> days</h1>
    </div>
  )
}
