import './Contenders.css'
import Card from './Card'
import { teams } from '../data/data'
import { Flag } from 'lucide-react'
import { useState, useEffect } from 'react'

// shows 10 teams at a time - rotates through all 48 every 3 seconds
function Contenders() {

  const [animationKey, setAnimationKey] = useState(0)

  // tracks which set of 10 we are on
  const [page, setPage] = useState(0)

  // how many teams per rotation
  const perPage = 10

  // figure out which 10 teams to show based on current page
  const start = (page * perPage) % teams.length
  const visible = []
  for (let i = 0; i < perPage; i++) {
    visible.push(teams[(start + i) % teams.length])
  }

  // move to next set of 10 every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPage(prev => prev + 1)
      setAnimationKey(prev => prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="contenders">
      <div className="section">

        {/* heading */}
        <h2 className="section-title">CONTENDERS</h2>
        <p className="section-subtitle">48 nations competing for the ultimate prize in football</p>

        {/* 5x2 grid showing 10 teams */}
        <div className="contenders-grid">
          {visible.map((team, index) => (
            <div
              key={`${animationKey}-${team.id}`}
              className="contenders-card-wrap"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Card
                title={team.name}
                subtitle={team.region}
                icon={<Flag size={20} color="white" />}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Contenders