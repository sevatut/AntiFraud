import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <Header />
      <div className='flex h-dvh'>
        <Sidebar />
        <main></main>
      </div>
    </>
  )
}

export default App
