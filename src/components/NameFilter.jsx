import { useState } from 'react'

function NameFilter() {
  const [names] = useState([
    'Ana Silva',
    'Bruno Santos',
    'Carlos Oliveira',
    'Daniela Lima',
    'Eduardo Costa',
    'Fernanda Souza',
    'Gabriel Pereira',
    'Helena Ferreira',
    'Igor Almeida',
    'Julia Rodrigues'
  ])

  const [filter, setFilter] = useState('')

  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="name-filter">
      <h3>Filtro de Nomes</h3>
      
      <div className="filter-input">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Digite para filtrar..."
        />
      </div>

      <div className="names-list">
        <h4>Nomes encontrados: {filteredNames.length}</h4>
        <ul>
          {filteredNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NameFilter 