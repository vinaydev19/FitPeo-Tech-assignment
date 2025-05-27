import React from 'react'
import { upcomingAppointments } from "../../data/appointmentData.js"

function UpcomingSchedule() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">The Upcoming Schedule</h2>

      <div className="space-y-6">
        {upcomingAppointments.map((daySchedule) => (
          <div key={daySchedule.id}>
            <h3 className="text-sm font-medium text-gray-600 mb-3">On {daySchedule.day}</h3>
            <div className="space-y-3">
              {daySchedule.appointments.map((appointment, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${appointment.type === "checkup" ? "bg-red-100" : "bg-blue-100"
                      }`}
                  >
                    {appointment.type === "checkup" && "🩺"}
                    {appointment.type === "specialist" && appointment.title.includes("Ophthalmologist") && "👁️"}
                    {appointment.type === "specialist" && appointment.title.includes("Cardiologist") && "❤️"}
                    {appointment.type === "specialist" && appointment.title.includes("Neurologist") && "🧠"}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{appointment.title}</h4>
                    <p className="text-sm text-gray-600">{appointment.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingSchedule