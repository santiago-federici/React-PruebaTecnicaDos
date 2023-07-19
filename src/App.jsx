
import './App.css'
import { CardsContainer } from './components/cardsContainer'

function App() {

  // const APIKEY = "eafc75c0"

  return (
    <main className='app-main'>
      <form className='serachbox'>
        <input placeholder='movies...' />
        <button>Search</button>
      </form>

      <CardsContainer />
    </main>
  )
}

export default App
