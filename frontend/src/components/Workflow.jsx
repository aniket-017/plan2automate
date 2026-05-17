export default function Workflow() {
  return (
    <section className="workflow" id="workflow">
        <div className="section-inner">
          <div className="section-tag">How it works</div>
          <h2 className="section-heading">From Plan to Execution — <span className="accent">Automatically</span></h2>
          <p className="section-sub">Watch a construction project coordinate itself in real time.</p>

          <div className="flow-container">
            <div className="flow-step" style={{ '--d': '0s' }}>
              <div className="flow-icon-wrap">
                <div className="flow-icon">📄</div>
              </div>
              <div className="flow-content">
                <div className="flow-num">01</div>
                <h3>Plan Uploaded</h3>
                <p>Project documents, blueprints, and schedules are ingested by the AI engine.</p>
              </div>
            </div>

            <div className="flow-arrow">
              <div className="arrow-line"></div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M12 6l4 4-4 4" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>

            <div className="flow-step" style={{ '--d': '.15s' }}>
              <div className="flow-icon-wrap">
                <div className="flow-icon">🤖</div>
              </div>
              <div className="flow-content">
                <div className="flow-num">02</div>
                <h3>AI Generates Tasks</h3>
                <p>AI breaks the plan into daily contractor actions, deadlines, and dependencies.</p>
              </div>
            </div>

            <div className="flow-arrow">
              <div className="arrow-line"></div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M12 6l4 4-4 4" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>

            <div className="flow-step" style={{ '--d': '.3s' }}>
              <div className="flow-icon-wrap">
                <div className="flow-icon">📲</div>
              </div>
              <div className="flow-content">
                <div className="flow-num">03</div>
                <h3>Contractors Receive Instructions</h3>
                <p>Automated SMS, voice, and app notifications dispatched instantly to field teams.</p>
              </div>
            </div>

            <div className="flow-arrow">
              <div className="arrow-line"></div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M12 6l4 4-4 4" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>

            <div className="flow-step" style={{ '--d': '.45s' }}>
              <div className="flow-icon-wrap">
                <div className="flow-icon">📈</div>
              </div>
              <div className="flow-content">
                <div className="flow-num">04</div>
                <h3>Progress Updates Sent to Clients</h3>
                <p>Clients see live milestones, reports, and alerts — no manual input required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
