import './App.css'
import NavBar from './components/NavBar/NavBar'
import Search from './components/SearchDiv/Search'
import Jobs from './components/JobDiv/Jobs'
import Value from './components/ValueDiv/Value'
import Footer from './components/FooterDiv/Footer'

function App() {
  return (
    <div className='w-full min-h-screen bg-white'>
      <NavBar />
      <div className='container mx-auto p-4'>
        <Search />
        <Jobs />
        <Value />
      </div>
      <Footer />
    </div>
  )
}

export default App
