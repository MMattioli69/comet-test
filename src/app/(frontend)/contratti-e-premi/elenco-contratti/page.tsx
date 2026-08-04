import React from 'react'
import '../../styles.css'

export default function ElencoContratti() {
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
          <h1>Elenco Contratti</h1>
          <p className="subtitle">Consultazione dei contratti attivi nel gruppo.</p>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Codice</th>
                  <th>Cliente</th>
                  <th>Data Inizio</th>
                  <th>Scadenza</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CONT-2024-001</td>
                  <td>Azienda A S.p.A.</td>
                  <td>01/01/2024</td>
                  <td>31/12/2024</td>
                  <td>Attivo</td>
                </tr>
                <tr>
                  <td>CONT-2024-002</td>
                  <td>Ditta B srl</td>
                  <td>15/02/2024</td>
                  <td>14/02/2025</td>
                  <td>Attivo</td>
                </tr>
                <tr>
                  <td>CONT-2023-015</td>
                  <td>Società C</td>
                  <td>10/05/2023</td>
                  <td>09/05/2024</td>
                  <td>Scaduto</td>
                </tr>
              </tbody>
            </table>
          </div>

          <a href="/contratti-e-premi" className="back-link">← Torna indietro</a>
        </div>
      </main>
    </div>
  )
}
