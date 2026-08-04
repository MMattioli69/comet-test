import React from 'react'
import '../../../styles.css'

export default function ReportTableFornitore() {
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
          <h1>Dati Progressivi per Fornitore</h1>
          <p className="subtitle">Analisi dei dati suddivisi per fornitore.</p>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Fornitore</th>
                  <th>Importo</th>
                  <th>Ordini</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fornitore A</td>
                  <td>€ 85.000</td>
                  <td>24</td>
                  <td>Attivo</td>
                </tr>
                <tr>
                  <td>Fornitore B</td>
                  <td>€ 72.500</td>
                  <td>18</td>
                  <td>Attivo</td>
                </tr>
                <tr>
                  <td>Fornitore C</td>
                  <td>€ 58.300</td>
                  <td>15</td>
                  <td>Sospeso</td>
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
