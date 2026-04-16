import "./GroupStage.css"
import groups from "../data/groups"

function GroupStage() {
 return (
  <section className="group-stage">
   <h2 className="group-stage-title">GROUP STAGE</h2>
   <p className="group-stage-text">
    48 teams divided into 12 groups battling for knockout stage qualification
   </p>

   <div className="groups-container">
    {groups.map((group, index) => (
     <div className="group-card" key={index}>
      <h3 className="group-name">{group.groupName}</h3>
      <div className="group-line"></div>

      <div className="group-teams">
       {group.teams.map((team, teamIndex) => (
        <div className="team-row" key={teamIndex}>
         <div className="team-left">
          {team.code ? (
           <img
            src={`https://flagcdn.com/w40/${team.code}.png`}
            alt={team.name}
            className="flag"
           />
          ) : (
           <span className="flag-box"></span>
          )}

          <span className="team-name">{team.name}</span>
         </div>

         <div className="team-points">
          <span>{team.points}</span> PTS
         </div>
        </div>
       ))}
      </div>
     </div>
    ))}
   </div>
  </section>
 )
}

export default GroupStage