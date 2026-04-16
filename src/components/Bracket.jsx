import './Bracket.css'
import { useState } from 'react'
import { roundOf32, roundOf16, quarterFinals, semiFinals, final } from '../data/bracket'
import { Trophy, ChevronRight, ChevronLeft } from 'lucide-react'

// full bracket - user picks winners round by round
function Bracket() {

  const [currentRound, setCurrentRound] = useState(0)

  // stores winners for each round
  const [r32Winners, setR32Winners] = useState(Array(16).fill(null))
  const [r16Winners, setR16Winners] = useState(Array(8).fill(null))
  const [qfWinners, setQfWinners] = useState(Array(4).fill(null))
  const [sfWinners, setSfWinners] = useState(Array(2).fill(null))
  const [champion, setChampion] = useState(null)

  const rounds = ["ROUND OF 32", "ROUND OF 16", "QUARTER FINALS", "SEMI FINALS", "FINAL"]

  const getRoundData = () => {
    switch(currentRound) {
      case 0: return { matches: roundOf32, winners: r32Winners, setWinners: setR32Winners }
      case 1: return { matches: roundOf16, winners: r16Winners, setWinners: setR16Winners }
      case 2: return { matches: quarterFinals, winners: qfWinners, setWinners: setQfWinners }
      case 3: return { matches: semiFinals, winners: sfWinners, setWinners: setSfWinners }
      case 4: return { matches: final, winners: [champion], setWinners: (w) => setChampion(w[0]) }
      default: return { matches: [], winners: [], setWinners: () => {} }
    }
  }

  const pickWinner = (matchIndex, team) => {
    const { winners, setWinners } = getRoundData()
    const updated = [...winners]
    updated[matchIndex] = team
    setWinners(updated)
  }

  // get team name from previous round winners
  const getTeamName = (defaultName, round, matchIndex, slot) => {
    if (round === 0) return defaultName
    const prevWinners = [r32Winners, r16Winners, qfWinners, sfWinners][round - 1]
    const teamIndex = matchIndex * 2 + slot
    return prevWinners[teamIndex] || 'TBD'
  }

  const allPicked = () => {
    const { winners } = getRoundData()
    return winners.every(w => w !== null)
  }

  const { matches, winners } = getRoundData()

  return (
    <section className="bracket">
      <div className="section">

        {/* heading */}
        <h2 className="section-title">PREDICT THE CHAMPION</h2>
        <p className="section-subtitle">pick winners round by round and crown your 2026 world cup champion</p>

        {/* round tabs */}
        <div className="bracket-tabs">
          {rounds.map((round, i) => (
            <button
              key={i}
              className={`bracket-tab ${currentRound === i ? 'active' : ''}`}
              onClick={() => setCurrentRound(i)}
            >
              {round}
            </button>
          ))}
        </div>

        {/* matches for current round */}
        <div className="bracket-grid">
          {matches.map((match, i) => {
            const teamA = getTeamName(match.teamA, currentRound, i, 0)
            const teamB = getTeamName(match.teamB, currentRound, i, 1)
            const isEmpty = teamA === 'TBD' || teamB === 'TBD'
            return (
              <div key={match.id} className="bracket-match">

                {/* match number */}
                <p className="bracket-match-num">match {i + 1}</p>

                {/* team a */}
                <button
                  className={`bracket-team ${winners[i] === teamA ? 'winner' : ''} ${teamA === 'TBD' ? 'empty' : ''}`}
                  onClick={() => teamA !== 'TBD' && pickWinner(i, teamA)}
                >
                  {teamA}
                </button>

                <span className="bracket-vs">vs</span>

                {/* team b */}
                <button
                  className={`bracket-team ${winners[i] === teamB ? 'winner' : ''} ${teamB === 'TBD' ? 'empty' : ''}`}
                  onClick={() => teamB !== 'TBD' && pickWinner(i, teamB)}
                >
                  {teamB}
                </button>

              </div>
            )
          })}
        </div>

        {/* navigation buttons */}
        <div className="bracket-nav">
          {currentRound > 0 && (
            <button className="btn-secondary" onClick={() => setCurrentRound(prev => prev - 1)}>
              <ChevronLeft size={16} /> previous round
            </button>
          )}
          {allPicked() && currentRound < 4 && (
            <button className="btn-primary" onClick={() => setCurrentRound(prev => prev + 1)}>
              next round <ChevronRight size={16} />
            </button>
          )}
        </div>

        {/* champion reveal */}
        {champion && currentRound === 4 && (
          <div className="bracket-champion">
            <Trophy size={40} color="var(--gold)" />
            <p className="bracket-champion-label">your 2026 world cup champion</p>
            <p className="bracket-champion-name">{champion}</p>
          </div>
        )}

      </div>
    </section>
  )
}

export default Bracket