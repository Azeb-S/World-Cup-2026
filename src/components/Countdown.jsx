import "./Countdown.css"

function Countdown() {
 return (
  <section className="countdown">
   <h2 className="countdown-title">TOURNAMENT STARTS IN</h2>

   <p className="countdown-text">
    The countdown to football&apos;s greatest spectacle
   </p>

   <div className="countdown-cards">
    <div className="countdown-card days">
     <h3>57</h3>
     <p>DAYS</p>
    </div>

    <div className="countdown-card hours">
     <h3>10</h3>
     <p>HOURS</p>
    </div>

    <div className="countdown-card minutes">
     <h3>02</h3>
     <p>MINUTES</p>
    </div>

    <div className="countdown-card seconds">
     <h3>07</h3>
     <p>SECONDS</p>
    </div>
   </div>
  </section>
 )
}

export default Countdown