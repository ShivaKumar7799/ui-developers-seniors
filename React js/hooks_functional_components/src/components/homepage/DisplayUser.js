import React, { useContext } from 'react'
import { AppMainContext } from '../../App'

function DisplayUser() {
    const {userName} = useContext(AppMainContext)
  return (
    <>logged in as {userName}</>
  )
}

export default DisplayUser