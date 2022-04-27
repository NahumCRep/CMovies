import React from 'react'

const Duration = ({ timeInMinutes }) => {
    return (
        <p>{`${Math.trunc(timeInMinutes / 60)}h ${ timeInMinutes - (60 * (Math.trunc(timeInMinutes / 60)))}min`}</p> 
    )
}

export default Duration