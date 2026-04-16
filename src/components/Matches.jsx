import './Matches.css'
import { matches } from '../data/data'
import { Calendar, Clock, MapPin } from 'lucide-react'

// shows upcoming world cup matches
function Matches() {
  return (
    <section className="matches">
      <div className="section">

        {/* heading */}
        <h2 className="section-title">UPCOMING MATCHES</h2>
        <p className="section-subtitle">mark your calendar for these must-watch fixtures</p>

        {/* grid of match cards */}
        <div className="matches-grid">
          {matches.map(match => (
            <div key={match.id} className="match-card">

              {/* top row - label and time */}
              <div className="match-top">
                <span className={`match-label ${match.label === 'Opening Match' ? 'opening' : ''}`}>
                  {match.label}
                </span>
                <div className="match-time">
                  <Clock size={14} />
                  <span>{match.time}</span>
                </div>
              </div>

              {/* teams row */}
              <div className="match-teams">
                <span className="match-team">{match.teamA}</span>
                <span className="match-vs">VS</span>
                <span className="match-team match-team-right">{match.teamB}</span>
              </div>

              {/* thin divider */}
              <div className="match-divider"></div>

              {/* bottom row - date and city */}
              <div className="match-bottom">
                <div className="match-meta">
                  <Calendar size={14} />
                  <span>{match.date}</span>
                </div>
                <div className="match-meta">
                  <MapPin size={14} />
                  <span>{match.city}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Matches