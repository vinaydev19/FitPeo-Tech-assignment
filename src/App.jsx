import Header from "./components/Header"
import './App.css'
import DashboardMainContent from './components/DashboardMainContent'
import SideMenu from "./components/SideMenu"

function App() {

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
