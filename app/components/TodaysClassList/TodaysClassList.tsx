"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const TodaysClassList = () => {
  const [routine, setRoutine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/routine")
      .then(data => console.log(data.data))
  }, [])
  return (
    <div>
      Hi
    </div>
  )
}

export default TodaysClassList
