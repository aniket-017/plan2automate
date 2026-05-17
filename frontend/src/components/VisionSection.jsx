export default function VisionSection() {
  return (
    <section className="vision-section" id="vision">
        <div className="vision-glow"></div>
        <div className="section-inner">
          <div className="section-tag">Roadmap</div>
          <h2 className="section-heading vision-h">The Future of <span className="accent">Autonomous Construction</span></h2>
          <p className="section-sub vision-sub">We're building the AI brain for the entire construction industry. Here's what's coming.</p>

          <div className="vision-grid">
            <div className="vision-card">
              <div className="vc-icon">🔮</div>
              <h4>Predictive Delay Engine</h4>
              <p>AI forecasts schedule risks 2–3 weeks before they materialize, giving teams time to act.</p>
              <span className="vc-stage">Q3 2025</span>
            </div>
            <div className="vision-card">
              <div className="vc-icon">💰</div>
              <h4>AI Cost Estimation</h4>
              <p>Intelligent estimation from plans — material quantities, labor costs, and contingency modeling.</p>
              <span className="vc-stage">Q4 2025</span>
            </div>
            <div className="vision-card">
              <div className="vc-icon">📝</div>
              <h4>Automated Tender Optimization</h4>
              <p>AI-assisted tender generation, vendor scoring, and bid comparison — end to end.</p>
              <span className="vc-stage">2026</span>
            </div>
            <div className="vision-card">
              <div className="vc-icon">🏗️</div>
              <h4>Site Intelligence</h4>
              <p>Computer vision and IoT integration for real-time site monitoring and safety compliance.</p>
              <span className="vc-stage">2026</span>
            </div>
          </div>
        </div>
      </section>
  )
}
