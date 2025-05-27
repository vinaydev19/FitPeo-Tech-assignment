import React from 'react'
import { activityData } from "../../data/appointmentData"

function ActivityFeed() {
  const maxValue = Math.max(...activityData.chartData.map((d) => d.value))

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">Activity</h2>
      <p className="text-sm text-gray-600 mb-6">{activityData.weeklyAppointments} appointments on this week</p>

      <div className="flex items-end space-x-2 h-32">
        {activityData.chartData.map((data, index) => (
          <div key={data.day} className="flex-1 flex flex-col items-center">
            <div
              className={`w-full rounded-t-sm ${index === 3 ? "bg-blue-500" : "bg-gray-200"}`}
              style={{
                height: `${(data.value / maxValue) * 100}%`,
                minHeight: "8px",
              }}
            ></div>
            <span className="text-xs text-gray-500 mt-2">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed