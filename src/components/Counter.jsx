import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    // Não permite que o contador fique negativo
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="counter-container">
      <h3>Contador: {count}</h3>
      <div className="counter-buttons">
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
      </div>
    </div>
  )
}

export default Counter 