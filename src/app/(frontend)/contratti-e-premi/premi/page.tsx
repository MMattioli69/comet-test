import React from 'react'
import '../../styles.css'

export default function Premi() {
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
          <h1>Premi e Incentivi</h1>
          <p className="subtitle">Elenco dei premi e incentivi per i contratti attivi.</p>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Contratto</th>
                  <th>Tipo Premio</th>
                  <th>Importo</th>
                  <th>Data Scadenza</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CONT-2024-001</td>
                  <td>Bonus Prestazioni</td>
                  <td>€ 5.000</td>
                  <td>30/06/2024</td>
                </tr>
                <tr>
                  <td>CONT-2024-002</td>
                  <td>Incentivo Volume</td>
                  <td>€ 8.500</td>
                  <td>31/12/2024</td>
                </tr>
                <tr>
                  <td>CONT-2024-001</td>
                  <td>Bonus Fedeltà</td>
                  <td>€ 3.200</td>
                  <td>15/11/2024</td>
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
