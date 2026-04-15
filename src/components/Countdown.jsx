import "./Countdown.css"
function Countdown() {
 return (
  <section className="countdown">
   <h2>TOURNAMENT STARTS IN</h2>

   <p>The countdown to football's greatest spectacle</p>

   <div className="countdown-cards">
    <div className="card">
     <h3>57</h3>
     <p>DAYS</p>
    </div>

    <div className="card">
     <h3>10</h3>
     <p>HOURS</p>
    </div>

    <div className="card">
     <h3>02</h3>
     <p>MINUTES</p>
    </div>

    <div className="card">
     <h3>07</h3>
     <p>SECONDS</p>
    </div>
   </div>
  </section>
 )
}

export default Countdown