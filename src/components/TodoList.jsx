import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

  const addTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="todo-list">
      <h3>Lista de Tarefas</h3>
      
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      <div className="filters">
        <button onClick={() => setFilter('all')}>Todas</button>
        <button onClick={() => setFilter('active')}>Ativas</button>
        <button onClick={() => setFilter('completed')}>Concluídas</button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList 