import React from 'react'
import {
    LayoutDashboard,
    History,
    Calendar,
    Clock,
    BarChart3,
    FileText,
    MessageCircle,
    HelpCircle,
    Settings,
} from "lucide-react"
import { navigationItems } from "../data/navigationData.js"
const iconMap = {
    LayoutDashboard,
    History,
    Calendar,
    Clock,
    BarChart3,
    FileText,
    MessageCircle,
    HelpCircle,
    Settings,
}

function SideMenu() {
    return (
        <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
            <div className="p-6">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">General</h3>

                <nav className="space-y-2">
                    {navigationItems.map((item) => {
                        const Icon = iconMap[item.icon]
                        return (
                            <a
                                key={item.id}
                                href="#"
                                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${item.active
                                    ? "bg-cyan-50 text-cyan-700 border-r-2 border-cyan-500"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </a>
                        )
                    })}
                </nav>
            </div>
        </aside>
    )
}

export default SideMenu



