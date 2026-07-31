import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  let news: any[] = []
  try {
    const newsResult = await payload.find({
      collection: 'news',
      limit: 100,
      sort: '-date',
    })
    news = newsResult.docs || []
  } catch (err) {
    console.log('News fetch error:', err)
  }

  return (
    <div className="frontend-home">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">comet</span>
          </div>
          <div className="header-right">
            <span className="user-greeting">Benvenuto</span>
            <button className="settings-btn">⚙️</button>
          </div>
        </div>
        <nav className="nav">
          <a href="/" className="nav-link active">Home</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="container">
          <h1>Ciao</h1>
          <p className="subtitle">Scegli una sezione per iniziare.</p>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">📊</div>
              <h3>Report Direzionali</h3>
              <p>Inserimento e visualizzazione dei dati progressivi.</p>
              <a href="#" className="card-link">Aprile →</a>
            </div>

            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Contratti e premi</h3>
              <p>Consulta contratti e premi del gruppo.</p>
              <a href="#" className="card-link">Aprile →</a>
            </div>

            <div className="card news-card">
              <div className="card-header">
                <div className="card-icon">📰</div>
                <h3>Notizie Commerciali</h3>
              </div>

              <div className="news-list">
                {news.length > 0 ? (
                  news.map((item) => (
                    <div key={item.id} className="news-item">
                      <div className="news-date">
                        {new Date(item.date).toLocaleDateString('it-IT', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric',
                        }).toUpperCase()}
                      </div>
                      <div className="news-title">{item.title}</div>
                    </div>
                  ))
                ) : (
                  <p className="no-news">Nessuna notizia al momento</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
