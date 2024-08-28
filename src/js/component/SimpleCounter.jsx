import React, { useState, useEffect } from "react";


export const SimpleCounter = () => {
  const [ counter, setCounter ] = useState(0);
  const [ running, setRunning ] = useState(false);
  const [ status, setStatus ] = useState({
    title: 'Clock',
    icon: 'far fa-clock',
    style: 'text-primary'
  })

  const handleReset = () => {
    setRunning(false)
    setCounter(0)
  }

  const handleButton = () => {
    setRunning(!running)
    if (running) {
      setStatus({title: 'Clock', icon: 'far fa-clock',style: 'text-secondary'})
    } else {
      setStatus({title: 'Chronometer', icon: 'fas fa-stopwatch',style: 'text-secondary'})
    }
  }

 
  useEffect(() => {
    if (running) {
      const newInterval = setInterval(() => {
        setCounter(counter => counter + 1)
      }, 10)
      return () => clearInterval(newInterval);
  

    }
  }, [running])


  return (
    <div>
      <h1 className="text-center text-success">Simple Counter</h1>
        <h2 className={status.style}>{status.title}</h2>
        <div className="big-counter">
          <div><i className={status.icon}></i></div>
          <div>{Math.floor(counter / 100000000 % 10)}</div>
          <div>{Math.floor(counter / 10000000 % 10)}</div>
          <div>{Math.floor(counter / 1000000 % 10)}</div>
          <div>{Math.floor(counter / 100000 % 10)}</div>
          <div>{Math.floor(counter / 10000 % 10)}</div>
          <div>{Math.floor(counter / 1000 % 10)}</div>
          <div>{Math.floor(counter / 100 % 10)}</div>
          <div>,</div>
          <div>{Math.floor(counter / 10 % 10)}</div>
          <div>{Math.floor(counter % 10)}</div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button onClick={handleButton} type="button" className="btn btn-outline-primary">
               {running ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleReset} type="reset" className="btn btn-outline-danger">Reset</button>
          </div>
        </div>
    </div>
  )
}