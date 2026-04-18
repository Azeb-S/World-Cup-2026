// ================================
// TEAMS - All 48 teams with correct groups
// ================================
export const teams = [
  // Group A
  { id: 1, name: "Mexico", group: "A", flag: "🇲🇽", region: "CONCACAF" },
  { id: 2, name: "South Africa", group: "A", flag: "🇿🇦", region: "CAF" },
  { id: 3, name: "South Korea", group: "A", flag: "🇰🇷", region: "AFC" },
  { id: 4, name: "Czech Republic", group: "A", flag: "🇨🇿", region: "UEFA" },
  // Group B
  { id: 5, name: "Canada", group: "B", flag: "🇨🇦", region: "CONCACAF" },
  { id: 6, name: "Bosnia & Herzegovina", group: "B", flag: "🇧🇦", region: "UEFA" },
  { id: 7, name: "Qatar", group: "B", flag: "🇶🇦", region: "AFC" },
  { id: 8, name: "Switzerland", group: "B", flag: "🇨🇭", region: "UEFA" },
  // Group C
  { id: 9, name: "Brazil", group: "C", flag: "🇧🇷", region: "CONMEBOL" },
  { id: 10, name: "Morocco", group: "C", flag: "🇲🇦", region: "CAF" },
  { id: 11, name: "Haiti", group: "C", flag: "🇭🇹", region: "CONCACAF" },
  { id: 12, name: "Scotland", group: "C", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", region: "UEFA" },
  // Group D
  { id: 13, name: "USA", group: "D", flag: "🇺🇸", region: "CONCACAF" },
  { id: 14, name: "Paraguay", group: "D", flag: "🇵🇾", region: "CONMEBOL" },
  { id: 15, name: "Australia", group: "D", flag: "🇦🇺", region: "AFC" },
  { id: 16, name: "Turkey", group: "D", flag: "🇹🇷", region: "UEFA" },
  // Group E
  { id: 17, name: "Germany", group: "E", flag: "🇩🇪", region: "UEFA" },
  { id: 18, name: "Curaçao", group: "E", flag: "🇨🇼", region: "CONCACAF" },
  { id: 19, name: "Ivory Coast", group: "E", flag: "🇨🇮", region: "CAF" },
  { id: 20, name: "Ecuador", group: "E", flag: "🇪🇨", region: "CONMEBOL" },
  // Group F
  { id: 21, name: "Netherlands", group: "F", flag: "🇳🇱", region: "UEFA" },
  { id: 22, name: "Japan", group: "F", flag: "🇯🇵", region: "AFC" },
  { id: 23, name: "Sweden", group: "F", flag: "🇸🇪", region: "UEFA" },
  { id: 24, name: "Tunisia", group: "F", flag: "🇹🇳", region: "CAF" },
  // Group G
  { id: 25, name: "Belgium", group: "G", flag: "🇧🇪", region: "UEFA" },
  { id: 26, name: "Egypt", group: "G", flag: "🇪🇬", region: "CAF" },
  { id: 27, name: "Iran", group: "G", flag: "🇮🇷", region: "AFC" },
  { id: 28, name: "New Zealand", group: "G", flag: "🇳🇿", region: "OFC" },
  // Group H
  { id: 29, name: "Spain", group: "H", flag: "🇪🇸", region: "UEFA" },
  { id: 30, name: "Cape Verde", group: "H", flag: "🇨🇻", region: "CAF" },
  { id: 31, name: "Saudi Arabia", group: "H", flag: "🇸🇦", region: "AFC" },
  { id: 32, name: "Uruguay", group: "H", flag: "🇺🇾", region: "CONMEBOL" },
  // Group I
  { id: 33, name: "France", group: "I", flag: "🇫🇷", region: "UEFA" },
  { id: 34, name: "Senegal", group: "I", flag: "🇸🇳", region: "CAF" },
  { id: 35, name: "Iraq", group: "I", flag: "🇮🇶", region: "AFC" },
  { id: 36, name: "Norway", group: "I", flag: "🇳🇴", region: "UEFA" },
  // Group J
  { id: 37, name: "Argentina", group: "J", flag: "🇦🇷", region: "CONMEBOL" },
  { id: 38, name: "Algeria", group: "J", flag: "🇩🇿", region: "CAF" },
  { id: 39, name: "Austria", group: "J", flag: "🇦🇹", region: "UEFA" },
  { id: 40, name: "Jordan", group: "J", flag: "🇯🇴", region: "AFC" },
  // Group K
  { id: 41, name: "Portugal", group: "K", flag: "🇵🇹", region: "UEFA" },
  { id: 42, name: "DR Congo", group: "K", flag: "🇨🇩", region: "CAF" },
  { id: 43, name: "Uzbekistan", group: "K", flag: "🇺🇿", region: "AFC" },
  { id: 44, name: "Colombia", group: "K", flag: "🇨🇴", region: "CONMEBOL" },
  // Group L
  { id: 45, name: "England", group: "L", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", region: "UEFA" },
  { id: 46, name: "Croatia", group: "L", flag: "🇭🇷", region: "UEFA" },
  { id: 47, name: "Ghana", group: "L", flag: "🇬🇭", region: "CAF" },
  { id: 48, name: "Panama", group: "L", flag: "🇵🇦", region: "CONCACAF" },
]

// ================================
// STADIUMS
// ================================
import BMO from '../assets/Stadiums/BMO.jpg'
import Azteca from '../assets/Stadiums/Estadio-Azteca.jpg'
import MetLife from '../assets/Stadiums/MetLife.jpg'
import SoFi from '../assets/Stadiums/Sofi.jpg'

export const stadiums = [
  {
    id: 1,
    name: "MetLife Stadium",
    city: "New York / New Jersey",
    country: "USA",
    capacity: 82500,
    image: MetLife,
    isFinalVenue: true,
  },
  {
    id: 2,
    name: "SoFi Stadium",
    city: "Los Angeles",
    country: "USA",
    capacity: 70240,
    image: SoFi,
    isFinalVenue: false,
  },
  {
    id: 3,
    name: "Estadio Azteca",
    city: "Mexico City",
    country: "Mexico",
    capacity: 87523,
    image: Azteca,
    isFinalVenue: false,
  },
  {
    id: 4,
    name: "BMO Field",
    city: "Toronto",
    country: "Canada",
    capacity: 45500,
    image: BMO,
    isFinalVenue: false,
  },
]

// ================================
// STATS
// ================================
export const stats = [
  { id: 1, label: "Teams", value: "48" },
  { id: 2, label: "Cities", value: "16" },
  { id: 3, label: "Matches", value: "104" },
  { id: 4, label: "Countries", value: "3" },
]

// ================================
// MATCHES
// ================================
export const matches = [
  { id: 1, teamA: "Mexico", teamB: "South Africa", date: "June 11, 2026", time: "1:00 PM MT", city: "Mexico City", group: "A", label: "Opening Match" },
  { id: 2, teamA: "USA", teamB: "Paraguay", date: "June 12, 2026", time: "6:00 PM PT", city: "Los Angeles", group: "D", label: "Group Stage" },
  { id: 3, teamA: "Canada", teamB: "Bosnia & Herzegovina", date: "June 12, 2026", time: "3:00 PM ET", city: "Toronto", group: "B", label: "Group Stage" },
  { id: 4, teamA: "Brazil", teamB: "Morocco", date: "June 13, 2026", time: "6:00 PM ET", city: "New York/New Jersey", group: "C", label: "Group Stage" },
  { id: 5, teamA: "Argentina", teamB: "Algeria", date: "June 16, 2026", time: "8:00 PM CT", city: "Kansas City", group: "J", label: "Group Stage" },
  { id: 6, teamA: "England", teamB: "Croatia", date: "June 17, 2026", time: "3:00 PM CT", city: "Dallas", group: "L", label: "Group Stage" },
]