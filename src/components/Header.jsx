import "./Header.css"

function Header() {
 return (
  <header className="header">
   <div className="header-left">
    <img src="/logo.png" alt="logo" className="logo" />

    <div className="logo-text">
     <h1>FIFA WORLD CUP</h1>
     <p>2026 • USA • CANADA • MEXICO</p>
    </div>
   </div>

   <nav className="nav">
    <a href="#">Schedule</a>
    <a href="#">Bracket</a>
    <a href="#">Venues</a>
    <a href="#">Teams</a>
   </nav>

   <button className="btn-primary">Get Tickets</button>
  </header>
 )
}

export default Header