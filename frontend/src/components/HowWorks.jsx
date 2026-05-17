export default function HowWorks() {
  return (
    <section className="how-works" id="how">
        <div className="section-inner">
          <div className="section-tag">Process</div>
          <h2 className="section-heading">Four Steps From <span className="accent">Plan to Done</span></h2>
          <p className="section-sub">Onboard a project in minutes. Let automation handle the rest.</p>

          <div className="steps-row">
            <div className="step-item">
              <div className="step-num">01</div>
              <div className="step-icon">📤</div>
              <h4>Upload Project Plan</h4>
              <p>Upload blueprints, BOQ, schedules — any format. Our AI reads it all.</p>
            </div>
            <div className="step-connector">···</div>
            <div className="step-item">
              <div className="step-num">02</div>
              <div className="step-icon">🧠</div>
              <h4>AI Analyzes Execution Flow</h4>
              <p>Tasks, dependencies, contractors, and timelines are structured automatically.</p>
            </div>
            <div className="step-connector">···</div>
            <div className="step-item">
              <div className="step-num">03</div>
              <div className="step-icon">⚙️</div>
              <h4>Automated Coordination Begins</h4>
              <p>Notifications, reminders, and reports fire without a single click from you.</p>
            </div>
            <div className="step-connector">···</div>
            <div className="step-item">
              <div className="step-num">04</div>
              <div className="step-icon">📡</div>
              <h4>Clients Receive Live Updates</h4>
              <p>Stakeholders get real-time dashboards and AI-generated progress summaries.</p>
            </div>
          </div>
        </div>
      </section>
  )
}
