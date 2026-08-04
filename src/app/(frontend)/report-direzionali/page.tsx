import React from 'react'
import '../../styles.css'

export default function ReportDirezionaliHome() {
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
          <a href="/report-direzionali" className="nav-link active">Report Direzionali</a>
          <a href="/contratti-e-premi" className="nav-link">Contratti e premi</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="container">
          <h1>Report Direzionali</h1>
          <p className="subtitle">Visualizzazione e analisi dei dati progressivi.</p>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">📊</div>
              <h3>Dati Progressivi</h3>
              <p>Tabella interattiva dei dati progressivi mensili.</p>
              <a href="/report-direzionali/report-table" className="card-link">Visualizza →</a>
            </div>

            <div className="card">
              <div className="card-icon">🏭</div>
              <h3>Per Fornitore</h3>
              <p>Analisi dati progressivi suddivisi per fornitore.</p>
              <a href="/report-direzionali/report-table-fornitore" className="card-link">Visualizza →</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
