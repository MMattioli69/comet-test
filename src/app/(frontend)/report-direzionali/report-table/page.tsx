import React from 'react'
import '../../../styles.css'

export default function ReportTable() {
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
          <h1>Dati Progressivi</h1>
          <p className="subtitle">Tabella interattiva con i dati progressivi mensili.</p>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Mese</th>
                  <th>Vendite</th>
                  <th>Margine</th>
                  <th>Crescita</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gennaio</td>
                  <td>€ 125.000</td>
                  <td>32%</td>
                  <td>+5%</td>
                </tr>
                <tr>
                  <td>Febbraio</td>
                  <td>€ 140.500</td>
                  <td>34%</td>
                  <td>+12%</td>
                </tr>
                <tr>
                  <td>Marzo</td>
                  <td>€ 155.800</td>
                  <td>35%</td>
                  <td>+11%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <a href="/report-direzionali" className="back-link">← Torna indietro</a>
        </div>
      </main>
    </div>
  )
}
