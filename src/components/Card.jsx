import './Card.css'

// reusable card - works for teams, venues, matches, stats
function Card({ title, subtitle, image, badge, icon, stat }) {
  return (
    <div className="card">

      {/* red label top left - like opening match or usa */}
      {badge && <span className="card-badge">{badge}</span>}
      
      {/* stadium or venue image */}
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}

      {/* icon in circle - like flag for teams */}
      {icon && (
        <div className="card-icon">
          {icon}
        </div>
      )}

      {/* big number - like stats */}
      {stat && <p className="card-stat">{stat}</p>}

      {/* title and subtitle at bottom */}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>

    </div>
  )
}

export default Card