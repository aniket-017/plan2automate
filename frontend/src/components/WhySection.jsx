export default function WhySection() {
  return (
    <section className="why-section" id="why">
        <div className="section-inner why-inner">
          <div className="why-left">
            <div className="section-tag">Differentiation</div>
            <h2 className="section-heading">Unlike Any Tool You've <span className="accent">Used Before</span></h2>
            <p className="section-sub">Traditional construction software was built for the 2000s. Plan2Automate is built for autonomous execution.</p>
            <a href="#" className="btn-primary">See Full Comparison</a>
          </div>
          <div className="why-right">
            <div className="compare-table">
              <div className="compare-header">
                <span></span>
                <span className="ch-old">Traditional Tools</span>
                <span className="ch-new">Plan2Automate</span>
              </div>
              <div className="compare-row">
                <span>AI-first workflow</span>
                <span className="c-no">✗</span>
                <span className="c-yes">✓</span>
              </div>
              <div className="compare-row">
                <span>Automated communication</span>
                <span className="c-no">✗</span>
                <span className="c-yes">✓</span>
              </div>
              <div className="compare-row">
                <span>Proactive delay alerts</span>
                <span className="c-no">✗</span>
                <span className="c-yes">✓</span>
              </div>
              <div className="compare-row">
                <span>Execution intelligence</span>
                <span className="c-no">✗</span>
                <span className="c-yes">✓</span>
              </div>
              <div className="compare-row">
                <span>In-house comm infrastructure</span>
                <span className="c-no">✗</span>
                <span className="c-yes">✓</span>
              </div>
              <div className="compare-row">
                <span>Zero manual reporting</span>
                <span className="c-no">✗</span>
                <span className="c-yes">✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
