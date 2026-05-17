export default function Features() {
  return (
    <section className="features" id="features">
        <div className="section-inner">
          <div className="section-tag">Features</div>
          <h2 className="section-heading">Everything Your Project <span className="accent">Needs to Run Itself</span></h2>
          <p className="section-sub">Purpose-built for construction teams who demand execution intelligence.</p>

          <div className="features-grid">
            <div className="feat-card feat-large">
              <div className="feat-icon-wrap">
                <span className="feat-icon">🤖</span>
              </div>
              <h3>AI Task Coordination</h3>
              <p>AI converts uploaded plans into structured daily actions for every team member. Dependencies tracked. Priorities set. Zero manual effort.</p>
              <div className="feat-tag">Core Engine</div>
            </div>
            <div className="feat-card">
              <div className="feat-icon-wrap">
                <span className="feat-icon">📣</span>
              </div>
              <h3>Automated Voice & SMS</h3>
              <p>Contractors receive automated reminders through voice calls and SMS — even without the app.</p>
            </div>
            <div className="feat-card">
              <div className="feat-icon-wrap">
                <span className="feat-icon">👁️</span>
              </div>
              <h3>Client Transparency Dashboard</h3>
              <p>Clients track milestone progress in real time. No calls. No PDFs. Just live data.</p>
            </div>
            <div className="feat-card">
              <div className="feat-icon-wrap">
                <span className="feat-icon">📊</span>
              </div>
              <h3>Smart Reporting</h3>
              <p>Automatic project summaries, delay alerts, and executive dashboards generated daily.</p>
            </div>
            <div className="feat-card feat-wide">
              <div className="feat-icon-wrap">
                <span className="feat-icon">⚠️</span>
              </div>
              <h3>Delay Intelligence</h3>
              <p>Track actual vs planned execution times. Predict delays before they happen. Get proactive alerts when projects drift off schedule — not after it's too late.</p>
              <div className="feat-progress-demo">
                <div className="fpd-row">
                  <span>Planned</span>
                  <div className="fpd-bar"><div className="fpd-fill planned" style={{ width: '100%' }}></div></div>
                  <span>100%</span>
                </div>
                <div className="fpd-row">
                  <span>Actual</span>
                  <div className="fpd-bar"><div className="fpd-fill actual" style={{ width: '78%' }}></div></div>
                  <span className="fpd-warn">78% ⚠</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
