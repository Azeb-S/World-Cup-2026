import "./Features.css"
import { Globe, Users, Trophy } from "lucide-react"

function Features() {
 return (
  <section className="features">
   <h2 className="features-title">A TOURNAMENT LIKE NO OTHER</h2>

   <p className="features-text">
    Breaking boundaries and setting new standards for the world&apos;s greatest sporting event
   </p>

   <div className="features-cards">
    <div className="feature-card">
     <div className="feature-icon">
      <Globe size={32} />
     </div>
     <h3>HISTORIC EXPANSION</h3>
     <p>First World Cup with 48 teams competing for glory</p>
    </div>

    <div className="feature-card">
     <div className="feature-icon">
      <Users size={32} />
     </div>
     <h3>THREE NATIONS UNITE</h3>
     <p>USA, Canada, and Mexico co-hosting the biggest tournament ever</p>
    </div>

    <div className="feature-card">
     <div className="feature-icon">
      <Trophy size={32} />
     </div>
     <h3>104 EPIC MATCHES</h3>
     <p>More matches, more excitement, more unforgettable moments</p>
    </div>
   </div>
  </section>
 )
}

export default Features