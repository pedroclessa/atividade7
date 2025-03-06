import { useState, useEffect } from 'react'

function Timer() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let intervalId

    if (isRunning && !isPaused) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isRunning, isPaused])

  const startTimer = () => {
    setIsRunning(true)
    setIsPaused(false)
  }

  const pauseTimer = () => {
    setIsPaused(true)
  }

  const resumeTimer = () => {
    setIsPaused(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setIsPaused(false)
    setTime(0)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="timer">
      <h3>Temporizador</h3>
      <div className="time-display">{formatTime(time)}</div>
      <div className="timer-controls">
        {!isRunning ? (
          <button onClick={startTimer}>Iniciar</button>
        ) : (
          <>
            {isPaused ? (
              <button onClick={resumeTimer}>Continuar</button>
            ) : (
              <button onClick={pauseTimer}>Pausar</button>
            )}
            <button onClick={resetTimer}>Reiniciar</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Timer 