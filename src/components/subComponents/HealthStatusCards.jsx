import React from 'react'
import { healthStatusData } from "../../data/healthData.js"

function HealthStatusCards() {
    return (
        <div className="space-y-4">
            {healthStatusData.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-3">
                        <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.status === "healthy" ? "bg-green-100" : "bg-red-100"
                                }`}
                        >
                            {item.id === "lungs" && (
                                <div className={`w-4 h-4 rounded ${item.status === "healthy" ? "bg-green-500" : "bg-red-500"}`}></div>
                            )}
                            {item.id === "teeth" && (
                                <div className={`w-4 h-4 rounded ${item.status === "healthy" ? "bg-green-500" : "bg-red-500"}`}></div>
                            )}
                            {item.id === "bone" && (
                                <div className={`w-4 h-4 rounded ${item.status === "healthy" ? "bg-green-500" : "bg-red-500"}`}></div>
                            )}
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-900">{item.title}</h3>
                            <p className="text-xs text-gray-500">{item.date}</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className={`h-1 rounded-full ${item.status === "healthy" ? "bg-green-200" : "bg-red-200"}`}>
                            <div
                                className={`h-1 rounded-full w-3/4 ${item.status === "healthy" ? "bg-green-500" : "bg-red-500"}`}
                            ></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HealthStatusCards