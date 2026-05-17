import { useState } from 'react'

export default function DashboardSection() {
  const [activeTab, setActiveTab] = useState('contractor')

  return (
    <section className="dashboard-section" id="dashboard">
        <div className="section-inner">
          <div className="section-tag">Platform Preview</div>
          <h2 className="section-heading">Every Dashboard You <span className="accent">Need — Built In</span></h2>
          <p className="section-sub">Real-time visibility for every stakeholder. No spreadsheets. No email chains.</p>

          <div className="dash-tabs">
            <button type="button" className={`dash-tab${activeTab === 'contractor' ? ' active' : ''}`} onClick={() => setActiveTab('contractor')}>Contractor View</button>
            <button type="button" className={`dash-tab${activeTab === 'timeline' ? ' active' : ''}`} onClick={() => setActiveTab('timeline')}>Project Timeline</button>
            <button type="button" className={`dash-tab${activeTab === 'ai' ? ' active' : ''}`} onClick={() => setActiveTab('ai')}>AI Task Engine</button>
            <button type="button" className={`dash-tab${activeTab === 'client' ? ' active' : ''}`} onClick={() => setActiveTab('client')}>Client Report</button>
          </div>

          <div className="dash-screens">

        
            <div className={`dash-screen${activeTab === 'contractor' ? ' active' : ''}`} id="tab-contractor">
              <div className="mock-dashboard">
                <div className="mock-sidebar">
                  <div className="mock-logo">⬡ P2A</div>
                  <div className="mock-nav-item active-nav">📋 My Tasks</div>
                  <div className="mock-nav-item">📅 Schedule</div>
                  <div className="mock-nav-item">📩 Messages</div>
                  <div className="mock-nav-item">⚙️ Settings</div>
                </div>
                <div className="mock-main">
                  <div className="mock-header">
                    <span className="mock-title">Contractor Dashboard — Rajesh Kumar</span>
                    <span className="mock-badge">3 tasks due today</span>
                  </div>
                  <div className="mock-task-list">
                    <div className="mock-task urgent">
                      <span className="task-priority urgent-dot"></span>
                      <span className="task-name">Complete formwork — Level 4 East Wing</span>
                      <span className="task-due">Due 9:00 AM</span>
                      <span className="task-status urgent-label">Urgent</span>
                    </div>
                    <div className="mock-task normal">
                      <span className="task-priority normal-dot"></span>
                      <span className="task-name">Inspect rebar installation — Columns B12–B18</span>
                      <span className="task-due">Due 2:00 PM</span>
                      <span className="task-status normal-label">In Progress</span>
                    </div>
                    <div className="mock-task normal">
                      <span className="task-priority normal-dot"></span>
                      <span className="task-name">Submit daily site report to PM</span>
                      <span className="task-due">Due 5:00 PM</span>
                      <span className="task-status pending-label">Pending</span>
                    </div>
                    <div className="mock-task done">
                      <span className="task-priority done-dot"></span>
                      <span className="task-name">Pour concrete — Foundation Section C</span>
                      <span className="task-due">Completed</span>
                      <span className="task-status done-label">✓ Done</span>
                    </div>
                  </div>
                  <div className="mock-notif-area">
                    <div className="mock-notif">📲 SMS sent · "Rebar inspection reminder — 1:45 PM"</div>
                    <div className="mock-notif">🤖 AI assigned 2 new tasks for tomorrow</div>
                  </div>
                </div>
              </div>
            </div>

        
            <div className={`dash-screen${activeTab === 'timeline' ? ' active' : ''}`} id="tab-timeline">
              <div className="mock-dashboard">
                <div className="mock-sidebar">
                  <div className="mock-logo">⬡ P2A</div>
                  <div className="mock-nav-item">📋 Tasks</div>
                  <div className="mock-nav-item active-nav">📅 Timeline</div>
                  <div className="mock-nav-item">📩 Reports</div>
                  <div className="mock-nav-item">⚙️ Settings</div>
                </div>
                <div className="mock-main">
                  <div className="mock-header">
                    <span className="mock-title">Project Timeline — Marina Tower Block A</span>
                    <span className="mock-badge">Week 24 of 48</span>
                  </div>
                  <div className="gantt-chart">
                    <div className="gantt-row">
                      <span className="gantt-label">Foundation</span>
                      <div className="gantt-bar-wrap">
                        <div className="gantt-bar g-done" style={{ left: '0%', width: '18%' }}></div>
                      </div>
                      <span className="g-tag done">✓ Complete</span>
                    </div>
                    <div className="gantt-row">
                      <span className="gantt-label">Superstructure</span>
                      <div className="gantt-bar-wrap">
                        <div className="gantt-bar g-active" style={{ left: '18%', width: '35%' }}></div>
                      </div>
                      <span className="g-tag active">Active</span>
                    </div>
                    <div className="gantt-row">
                      <span className="gantt-label">MEP Rough-in</span>
                      <div className="gantt-bar-wrap">
                        <div className="gantt-bar g-upcoming" style={{ left: '40%', width: '25%' }}></div>
                      </div>
                      <span className="g-tag upcoming">Q3</span>
                    </div>
                    <div className="gantt-row">
                      <span className="gantt-label">Finishing Works</span>
                      <div className="gantt-bar-wrap">
                        <div className="gantt-bar g-upcoming" style={{ left: '62%', width: '28%' }}></div>
                      </div>
                      <span className="g-tag upcoming">Q4</span>
                    </div>
                    <div className="gantt-row">
                      <span className="gantt-label">Handover</span>
                      <div className="gantt-bar-wrap">
                        <div className="gantt-bar g-upcoming" style={{ left: '88%', width: '12%' }}></div>
                      </div>
                      <span className="g-tag upcoming">Dec</span>
                    </div>
                  </div>
                  <div className="gantt-footer">
                    <span className="gf-item">🔴 Delay risk: MEP — 4 days behind plan</span>
                    <span className="gf-item">🤖 AI re-scheduling in progress…</span>
                  </div>
                </div>
              </div>
            </div>

        
            <div className={`dash-screen${activeTab === 'ai' ? ' active' : ''}`} id="tab-ai">
              <div className="mock-dashboard">
                <div className="mock-sidebar">
                  <div className="mock-logo">⬡ P2A</div>
                  <div className="mock-nav-item">📋 Tasks</div>
                  <div className="mock-nav-item">📅 Timeline</div>
                  <div className="mock-nav-item active-nav">⚡ AI Engine</div>
                  <div className="mock-nav-item">⚙️ Settings</div>
                </div>
                <div className="mock-main">
                  <div className="mock-header">
                    <span className="mock-title">AI Task Engine — Live</span>
                    <span className="mock-badge ai-badge">● Running</span>
                  </div>
                  <div className="ai-engine-view">
                    <div className="ai-stats-row">
                      <div className="ai-stat"><span className="ai-stat-num">147</span><span className="ai-stat-label">Tasks Generated</span></div>
                      <div className="ai-stat"><span className="ai-stat-num">38</span><span className="ai-stat-label">Auto-assigned</span></div>
                      <div className="ai-stat"><span className="ai-stat-num">12</span><span className="ai-stat-label">SMS Sent Today</span></div>
                      <div className="ai-stat"><span className="ai-stat-num">0</span><span className="ai-stat-label">Manual Actions</span></div>
                    </div>
                    <div className="ai-log">
                      <div className="log-entry"><span className="log-time">09:02</span><span className="log-msg">Plan analyzed · 14 new tasks created for Week 25</span></div>
                      <div className="log-entry"><span className="log-time">09:05</span><span className="log-msg">Rajesh Kumar · Formwork task auto-assigned</span></div>
                      <div className="log-entry warn-log"><span className="log-time">09:18</span><span className="log-msg">⚠ MEP delay detected · rescheduling triggered</span></div>
                      <div className="log-entry"><span className="log-time">09:30</span><span className="log-msg">Client report generated · Sent to 3 stakeholders</span></div>
                      <div className="log-entry"><span className="log-time">10:00</span><span className="log-msg">SMS dispatched · Rebar team · Site inspection 2PM</span></div>
                      <div className="log-entry"><span className="log-time">10:45</span><span className="log-msg">Contractor confirmed task · Foundation ✓</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        
            <div className={`dash-screen${activeTab === 'client' ? ' active' : ''}`} id="tab-client">
              <div className="mock-dashboard">
                <div className="mock-sidebar">
                  <div className="mock-logo">⬡ P2A</div>
                  <div className="mock-nav-item">📊 Overview</div>
                  <div className="mock-nav-item">📅 Milestones</div>
                  <div className="mock-nav-item active-nav">📩 Reports</div>
                  <div className="mock-nav-item">📁 Documents</div>
                </div>
                <div className="mock-main">
                  <div className="mock-header">
                    <span className="mock-title">Client Report — Week 24</span>
                    <span className="mock-badge">Auto-generated</span>
                  </div>
                  <div className="client-report-view">
                    <div className="cr-metrics">
                      <div className="cr-metric">
                        <div className="cr-circle" style={{ '--pct': '65%' }}>
                          <span>65%</span>
                        </div>
                        <span>Overall Complete</span>
                      </div>
                      <div className="cr-metric">
                        <div className="cr-circle on-track" style={{ '--pct': '100%' }}>
                          <span>On Track</span>
                        </div>
                        <span>Schedule Status</span>
                      </div>
                      <div className="cr-metric">
                        <div className="cr-circle budget" style={{ '--pct': '82%' }}>
                          <span>82%</span>
                        </div>
                        <span>Budget Used</span>
                      </div>
                    </div>
                    <div className="cr-milestones">
                      <div className="crm-item crm-done">✅ Foundation Completed — Week 8</div>
                      <div className="crm-item crm-done">✅ Ground floor slab poured — Week 14</div>
                      <div className="crm-item crm-active">🔵 Superstructure in progress — Week 24</div>
                      <div className="crm-item crm-pending">⬜ MEP installation — Starts Week 28</div>
                      <div className="crm-item crm-pending">⬜ Final handover — Week 48</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}
