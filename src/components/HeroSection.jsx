import "./HeroSection.css"
function HeroSection() {
 return (
  <section className="hero">
   <p className="hero-date">JUNE 11 - JULY 19, 2026</p>

   <h1 className="hero-title">FIFA WORLD CUP</h1>
   <h2 className="hero-year">2026</h2>

   <p className="hero-text">
    The beautiful game returns to North America. Three nations. One dream.
    Infinite possibilities.
   </p>

   <div className="hero-buttons">
    <button>Explore Tournament</button>
    <button>Watch Trailer</button>
   </div>

   <div className="hero-stats">
    <div className="stat-card">
     <div>Icon</div>
     <h3>48</h3>
     <p>Teams</p>
    </div>

    <div className="stat-card">
     <div>Icon</div>
     <h3>16</h3>
     <p>Cities</p>
    </div>

    <div className="stat-card">
     <div>Icon</div>
     <h3>104</h3>
     <p>Matches</p>
    </div>

    <div className="stat-card">
     <div>Icon</div>
     <h3>3</h3>
     <p>Countries</p>
    </div>
   </div>
  </section>
 )
}

export default HeroSection