import React from 'react'
import '../../styles.css'

export default function ContrattiEPremiHome() {
  return (
    <div className="frontend-home">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src="/logo-comet.svg" alt="Comet Logo" width={120} height={50} style={{ height: 'auto', maxWidth: '120px' }} />
          </div>
          <div className="header-right">
            <span className="user-greeting">Benvenuto</span>
            <button className="settings-btn">⚙️</button>
          </div>
        </div>
        <nav className="nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/report-direzionali" className="nav-link">Report Direzionali</a>
          <a href="/contratti-e-premi" className="nav-link active">Contratti e premi</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="container">
          <h1>Contratti e Premi</h1>
          <p className="subtitle">Gestione e consultazione di contratti e premi del gruppo.</p>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Elenco Contratti</h3>
              <p>Visualizza l'elenco completo di tutti i contratti attivi.</p>
              <a href="/contratti-e-premi/elenco-contratti" className="card-link">Visualizza →</a>
            </div>

            <div className="card">
              <div className="card-icon">🏆</div>
              <h3>Premi Associati</h3>
              <p>Consulta i premi e gli incentivi legati ai contratti.</p>
              <a href="/contratti-e-premi/premi" className="card-link">Visualizza →</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
