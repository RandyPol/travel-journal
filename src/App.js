import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import travelLocation from './data/locations'
const cardList = travelLocation.map((place) => (
  <Card key={place.title} cardData={place} />
))

function App() {
  return (
    <div className="App">
      <Header />
      <div className='card--Container'>{cardList}</div>
    </div>
  )
}

export default App
