import './Venues.css'
import { stadiums } from '../data/data'
import { Users } from 'lucide-react'

// shows our 4 stadiums - custom layout not using Card for this one
function Venues() {
  return (
    <section className="venues">
      <div className="section">

        {/* heading */}
        <h2 className="section-title">ICONIC VENUES</h2>
        <p className="section-subtitle">from legendary stadiums to state-of-the-art arenas across north america</p>

        {/* 4 stadium cards */}
        <div className="venues-grid">
          {stadiums.map(stadium => (
            <div key={stadium.id} className="venue-card">

              {/* country badge */}
              <span className="venue-badge">{stadium.country}</span>

              {/* stadium image */}
              <div className="venue-image">
                <img src={stadium.image} alt={stadium.name} />
              </div>

              {/* info below image */}
              <div className="venue-info">
                <h3 className="venue-city">{stadium.city.toUpperCase()}</h3>
                <p className="venue-name">{stadium.name}</p>
                <div className="venue-capacity">
                  <Users size={14} color="var(--gold)" />
                  <span>{stadium.capacity.toLocaleString()} capacity</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Venues