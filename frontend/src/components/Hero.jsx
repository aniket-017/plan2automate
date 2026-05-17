export default function Hero() {
  return (
    <section className="hero" id="hero">
        <div className="hero-bg-grid"></div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>

        <div className="hero-inner">
      
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              AI-Powered Construction OS
            </div>
            <h1 className="hero-headline">
              Turn Construction Plans Into
              <span className="headline-accent">Automated Execution</span>
            </h1>
            <p className="hero-sub">
              AI-powered coordination platform for contractors, project managers, and clients. No more manual follow-ups. No more missed updates.
            </p>
            <div className="hero-actions">
              <a href="#" className="btn-primary btn-lg">
                <span>Book a Demo</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#" className="btn-outline btn-lg">Start Free Trial</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">94%</span>
                <span className="stat-label">Fewer delays</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">3×</span>
                <span className="stat-label">Faster coordination</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">0</span>
                <span className="stat-label">Manual reports</span>
              </div>
            </div>
          </div>

      
          <div className="hero-right">
            <div className="dashboard-card">
              <div className="card-topbar">
                <span className="topbar-dot red"></span>
                <span className="topbar-dot yellow"></span>
                <span className="topbar-dot green"></span>
                <span className="topbar-title">Project Dashboard — Marina Tower</span>
              </div>

          
              <div className="card-section">
                <div className="section-label">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="#f97316" strokeWidth="1.4"/><path d="M6 3v3l2 1.5" stroke="#f97316" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  Project Timeline
                </div>
                <div className="timeline-bars">
                  <div className="t-row">
                    <span>Foundation</span>
                    <div className="bar-wrap"><div className="bar bar-done" style={{ width: '100%' }}></div></div>
                    <span className="t-tag done">Done</span>
                  </div>
                  <div className="t-row">
                    <span>Structure</span>
                    <div className="bar-wrap"><div className="bar bar-active" style={{ width: '65%' }}></div></div>
                    <span className="t-tag active">65%</span>
                  </div>
                  <div className="t-row">
                    <span>MEP Works</span>
                    <div className="bar-wrap"><div className="bar bar-pending" style={{ width: '20%' }}></div></div>
                    <span className="t-tag pending">Q3</span>
                  </div>
                  <div className="t-row">
                    <span>Finishing</span>
                    <div className="bar-wrap"><div className="bar bar-pending" style={{ width: '5%' }}></div></div>
                    <span className="t-tag pending">Q4</span>
                  </div>
                </div>
              </div>

          
              <div className="notif-row">
                <div className="notif-item notif-contractor">
                  <div className="notif-icon">🔧</div>
                  <div>
                    <div className="notif-title">Contractor Alert</div>
                    <div className="notif-body">Rebar team — report by 9AM</div>
                  </div>
                  <span className="notif-time">Now</span>
                </div>
                <div className="notif-item notif-client">
                  <div className="notif-icon">📊</div>
                  <div>
                    <div className="notif-title">Client Update Sent</div>
                    <div className="notif-body">Week 24 progress report</div>
                  </div>
                  <span className="notif-time">2m</span>
                </div>
                <div className="notif-item notif-ai">
                  <div className="notif-icon">⚡</div>
                  <div>
                    <div className="notif-title">AI Task Generated</div>
                    <div className="notif-body">14 actions auto-assigned</div>
                  </div>
                  <span className="notif-time">5m</span>
                </div>
              </div>

          
              <div className="ai-pulse-bar">
                <span className="pulse-dot"></span>
                AI engine running · 3 automations active · 0 manual actions needed
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
