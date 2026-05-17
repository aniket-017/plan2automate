export default function Problems() {
  return (
    <section className="problems" id="problems">
        <div className="section-inner">
          <div className="section-tag">The Problem</div>
          <h2 className="section-heading">Construction Communication <span className="accent">is Broken</span></h2>
          <p className="section-sub">Every project suffers the same failures. Until now.</p>

          <div className="problems-grid">
            <div className="problem-card">
              <div className="prob-icon">📵</div>
              <h4>Missed Contractor Updates</h4>
              <p>Critical site changes go unseen until it's too late to course-correct.</p>
            </div>
            <div className="problem-card">
              <div className="prob-icon">📞</div>
              <h4>Constant Client Follow-ups</h4>
              <p>PMs spend hours each week answering status calls instead of managing work.</p>
            </div>
            <div className="problem-card">
              <div className="prob-icon">⏳</div>
              <h4>Delayed Execution</h4>
              <p>Tasks slip without automated reminders or intelligent dependency tracking.</p>
            </div>
            <div className="problem-card">
              <div className="prob-icon">📋</div>
              <h4>Manual Reporting</h4>
              <p>Hours wasted producing reports that should generate themselves.</p>
            </div>
            <div className="problem-card">
              <div className="prob-icon">🔒</div>
              <h4>No Transparency</h4>
              <p>Stakeholders operate blind, causing mistrust and reactive decisions.</p>
            </div>
          </div>

          <div className="fix-banner">
            <span className="fix-logo">⬡</span>
            <span><strong>Plan2Automate</strong> fixes all of this — automatically.</span>
            <a href="#" className="btn-primary">See How →</a>
          </div>
        </div>
      </section>
  )
}
