import React from 'react'
import { Search, Bell, Plus, User } from "lucide-react"


function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
    <div className="flex items-center space-x-8">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-cyan-500">Health</span>
        <span className="text-2xl font-bold text-gray-800">care.</span>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <button className="relative p-2 text-gray-600 hover:text-gray-800">
        <Bell className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
      </button>

      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <span className="text-sm font-medium text-gray-700">Dr. Smith</span>
      </div>

      <button className="bg-cyan-500 text-white p-2 rounded-lg hover:bg-cyan-600">
        <Plus className="w-5 h-5" />
      </button>
    </div>
  </header>
  )
}

export default Header