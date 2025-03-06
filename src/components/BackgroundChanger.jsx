import { useState, useEffect } from 'react'

function BackgroundChanger() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  const changeColor = () => {
    const newColor = generateRandomColor()
    setBackgroundColor(newColor)
  }

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor
    return () => {
      document.body.style.backgroundColor = '#ffffff'
    }
  }, [backgroundColor])

  return (
    <div className="background-changer">
      <h3>Cor de Fundo Atual: {backgroundColor}</h3>
      <button onClick={changeColor}>Mudar Cor</button>
    </div>
  )
}

export default BackgroundChanger 