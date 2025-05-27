import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header"
import './App.css'
import DashboardMainContent from './components/DashboardMainContent'
import SideBar from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <SideBar />
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default App
