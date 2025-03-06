import { useState } from 'react'

function Tabs() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: 'Sobre',
      content: (
        <div className="tab-content">
          <h4>Sobre Nós</h4>
          <p>
            Somos uma empresa dedicada a criar soluções inovadoras para nossos clientes.
            Nossa missão é entregar produtos de alta qualidade que atendam às necessidades
            específicas de cada projeto.
          </p>
        </div>
      )
    },
    {
      title: 'Serviços',
      content: (
        <div className="tab-content">
          <h4>Nossos Serviços</h4>
          <ul>
            <li>Desenvolvimento Web</li>
            <li>Design de Interface</li>
            <li>Consultoria Técnica</li>
            <li>Suporte e Manutenção</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Contato',
      content: (
        <div className="tab-content">
          <h4>Entre em Contato</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem:</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )
    }
  ]

  return (
    <div className="tabs">
      <h3>Navegação por Tabs</h3>
      
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tabs-content">
        {tabs[activeTab].content}
      </div>
    </div>
  )
}

export default Tabs 