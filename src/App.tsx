import './App.css'
import { Outlet } from '@tanstack/react-router'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default App
