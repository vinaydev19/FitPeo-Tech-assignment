import { useState } from 'react'
import Header from "./components/Header"
import './App.css'
import DashboardMainContent from './components/DashboardMainContent'
import SideMenu from "./components/SideMenu"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <SideMenu />
        <DashboardMainContent />
      </div>
    </div>
  )
}

export default App
