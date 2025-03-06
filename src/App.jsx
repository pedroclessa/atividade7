import { useState } from 'react'
import './App.css'
import './styles/components.css'

// Importando os componentes
import Counter from './components/Counter'
import BackgroundChanger from './components/BackgroundChanger'
import TodoList from './components/TodoList'
import Timer from './components/Timer'
import NameFilter from './components/NameFilter'
import RegistrationForm from './components/RegistrationForm'
import PostsList from './components/PostsList'
import ImageGallery from './components/ImageGallery'
import CountdownTimer from './components/CountdownTimer'
import Tabs from './components/Tabs'

function App() {
  const [currentActivity, setCurrentActivity] = useState(null)

  const activities = [
    { id: 1, name: 'Contador Simples', component: <Counter /> },
    { id: 2, name: 'Alteração de Cor de Fundo', component: <BackgroundChanger /> },
    { id: 3, name: 'Lista de Tarefas', component: <TodoList /> },
    { id: 4, name: 'Temporizador com useEffect', component: <Timer /> },
    { id: 5, name: 'Filtro de Lista', component: <NameFilter /> },
    { id: 6, name: 'Formulário de Registro Simples', component: <RegistrationForm /> },
    { id: 7, name: 'Aplicação de Requisição de Dados', component: <PostsList /> },
    { id: 8, name: 'Galeria de Imagens', component: <ImageGallery /> },
    { id: 9, name: 'Timer com Intervalo e Alerta', component: <CountdownTimer /> },
    { id: 10, name: 'Componentes com Tabs Navegáveis', component: <Tabs /> }
  ]

  return (
    <div className="app-container">
      <h1>Atividades React + Vite</h1>
      
      {!currentActivity ? (
        <div className="activities-menu">
          <h2>Selecione uma atividade:</h2>
          <div className="activities-grid">
            {activities.map(activity => (
              <button
                key={activity.id}
                className="activity-button"
                onClick={() => setCurrentActivity(activity.id)}
              >
                {activity.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="activity-container">
          <button 
            className="back-button"
            onClick={() => setCurrentActivity(null)}
          >
            Voltar ao Menu
          </button>
          <h2>{activities.find(a => a.id === currentActivity)?.name}</h2>
          <div className="activity-content">
            {activities.find(a => a.id === currentActivity)?.component}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
