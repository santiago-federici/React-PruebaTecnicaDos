import { MoviesContainer } from './components/Movies'

import './App.css'

function App() {


  return (
    <main className='app-main'>
      <form className='serachbox'>
        <input placeholder='movies...' />
        <button>Search</button>
      </form>

      <MoviesContainer />
    </main>
  )
}

export default App
