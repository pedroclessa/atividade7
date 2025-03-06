import { useState, useEffect } from 'react'

function CountdownTimer() {
  const [time, setTime] = useState(0)
  const [inputTime, setInputTime] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let intervalId

    if (isRunning && !isPaused && time > 0) {
      intervalId = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 1) {
            clearInterval(intervalId)
            setIsRunning(false)
            alert('Tempo acabou!')
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isRunning, isPaused, time])

  const startTimer = () => {
    const seconds = parseInt(inputTime)
    if (seconds > 0) {
      setTime(seconds)
      setIsRunning(true)
      setIsPaused(false)
    }
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
    setInputTime('')
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="countdown-timer">
      <h3>Timer com Contagem Regressiva</h3>
      
      {!isRunning ? (
        <div className="timer-setup">
          <input
            type="number"
            value={inputTime}
            onChange={(e) => setInputTime(e.target.value)}
            placeholder="Digite o tempo em segundos"
            min="1"
          />
          <button onClick={startTimer}>Iniciar</button>
        </div>
      ) : (
        <div className="timer-display">
          <div className="time">{formatTime(time)}</div>
          <div className="controls">
            {isPaused ? (
              <button onClick={resumeTimer}>Continuar</button>
            ) : (
              <button onClick={pauseTimer}>Pausar</button>
            )}
            <button onClick={resetTimer}>Reiniciar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CountdownTimer 