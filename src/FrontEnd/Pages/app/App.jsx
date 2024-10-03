import { useState } from 'react'
import './App.module.css'

function App() {
  return (
    <div className="containerMain">
      <header className="header-top">
        <div className="logo">DashBlog</div>
        <nav className="navigation">
          <ul className="list-navigation">
            <li className="itens-list-navigation-1">
            <button className="button-list-navigate-1">Inicio</button>
            </li>
            <li className="itens-list-navigation-2">
            <button className="button-list-navigate-1">Atualizações</button>
            </li>
            <li className="itens-list-navigation-3">
            <button className="button-list-navigate-1">Entrar or Inscrever-se</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default App
