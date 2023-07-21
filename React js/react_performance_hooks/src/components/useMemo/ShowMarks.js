import React, { memo } from 'react'

function ShowMarks({total}) {
    console.log("showmarks component is rendered")
  return (
    <>{total}</>
  )
}

export default ShowMarks