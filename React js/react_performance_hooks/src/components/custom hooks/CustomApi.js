import React, { useEffect, useState } from 'react'

function useGetApi(url) {

    const [apiData, setApiData] = useState([])

  useEffect(() => {
        fetch(url).then(res => res.json()).then(res => setApiData(res))
  },[])
  return {
    data : apiData
  }
}

export default useGetApi