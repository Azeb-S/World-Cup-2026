import './Footer.css'
import { Trophy } from 'lucide-react'

// site footer with links
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* left - branding */}
        <div className="footer-brand">
          <div className="footer-logo">
            <Trophy size={20} color="white" />
          </div>
          <h3 className="footer-title">FIFA WORLD CUP 2026</h3>
          <p className="footer-desc">the greatest show on earth returns to north america. 48 teams. 3 nations. 1 champion.</p>
        </div>

        {/* tournament links */}
        <div className="footer-col">
          <h4 className="footer-col-title">tournament</h4>
          <a href="#schedule">schedule</a>
          <a href="#teams">teams</a>
          <a href="#venues">venues</a>
          <a href="#bracket">bracket</a>
        </div>

        {/* experience links */}
        <div className="footer-col">
          <h4 className="footer-col-title">experience</h4>
          <a href="#tickets">tickets</a>
          <a href="#hospitality">hospitality</a>
          <a href="#travel">travel</a>
          <a href="#fanzone">fan zone</a>
        </div>

      </div>

        {/* bottom bar */}
        <div className="footer-bottom">
        <p>© 2026 fifa world cup. all rights reserved. | built by Elvin  & Azeb</p>
        <div className="footer-bottom-links">
            <a href="#">privacy policy</a>
            <a href="#">terms of service</a>
            <a href="#">contact</a>
        </div>
        </div>

    </footer>
  )
}

export default Footer