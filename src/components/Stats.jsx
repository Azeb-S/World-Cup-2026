import './Stats.css'
import { Trophy, TrendingUp } from 'lucide-react'

// shows tournament records and expected 2026 stats
function Stats() {

  // tournament records data
  const records = [
    { label: "most goals in a single tournament", value: "171", sub: "france 1998 and brazil 2014" },
    { label: "largest attendance", value: "3.6M", sub: "usa 1994" },
    { label: "most titles", value: "5", sub: "brazil" },
  ]

  // expected 2026 data
  const expected = [
    { label: "total expected attendance", value: "5M+", sub: "across all matches" },
    { label: "global tv audience", value: "5B+", sub: "worldwide viewers" },
    { label: "economic impact", value: "$5B", sub: "for host nations" },
  ]

  return (
    <section className="stats">
      <div className="section">

        {/* heading */}
        <h2 className="section-title">BY THE NUMBERS</h2>
        <p className="section-subtitle">breaking records and making history with the biggest world cup ever</p>

        {/* two big cards side by side */}
        <div className="stats-grid">

          {/* tournament records card */}
          <div className="stats-card">
            <div className="stats-card-header">
              <div className="stats-icon stats-icon-gold">
                <Trophy size={20} color="white" />
              </div>
              <h3 className="stats-card-title">TOURNAMENT RECORDS</h3>
            </div>

            {/* each record row */}
            {records.map((rec, i) => (
              <div key={i} className="stats-row">
                <div className="stats-row-left">
                  <p className="stats-row-label">{rec.label}</p>
                  <p className="stats-row-sub">{rec.sub}</p>
                </div>
                <span className="stats-row-value">{rec.value}</span>
              </div>
            ))}
          </div>

          {/* expected 2026 card */}
          <div className="stats-card">
            <div className="stats-card-header">
              <div className="stats-icon stats-icon-red">
                <TrendingUp size={20} color="white" />
              </div>
              <h3 className="stats-card-title">EXPECTED 2026</h3>
            </div>

            {/* each expected row */}
            {expected.map((exp, i) => (
              <div key={i} className="stats-row">
                <div className="stats-row-left">
                  <p className="stats-row-label">{exp.label}</p>
                  <p className="stats-row-sub">{exp.sub}</p>
                </div>
                <span className="stats-row-value">{exp.value}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Stats