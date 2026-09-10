import './App.css'
import { Outlet, useLocation } from '@tanstack/react-router'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const location = useLocation()

  if (location.pathname === '/login' || location.pathname === '/register') {
    return <Outlet />
  }

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