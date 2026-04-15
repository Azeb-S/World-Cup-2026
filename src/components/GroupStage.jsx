import groups from "../data/groups"
import "./GroupStage.css"


function GroupStage() {
 return (
  <section className="group-stage">
   <h2>GROUP STAGE</h2>
   <p>
    48 teams divided into 12 groups battling for knockout stage qualification
   </p>

   <div className="groups-container">
    {groups.map((group, index) => (
     <div className="group-card" key={index}>
      <h3>{group.groupName}</h3>

      <div className="group-teams">
       {group.teams.map((team, teamIndex) => (
        <div className="team-row" key={teamIndex}>
         <div className="team-left">
          <span className="flag-box"></span>
          <span>{team.name}</span>
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