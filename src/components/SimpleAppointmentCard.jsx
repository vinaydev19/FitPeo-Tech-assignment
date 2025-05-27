import React from 'react'
import { todayAppointments } from '../data/appointmentData'

function SimpleAppointmentCard() {
  return (
    <div className="space-y-3">
      {todayAppointments.map((appointment, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg ${appointment.type === "dentist" ? "bg-blue-600 text-white" : "bg-orange-100 text-orange-800"
            }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{appointment.title}</h3>
              <p className="text-sm opacity-90">{appointment.time}</p>
              <p className="text-sm opacity-75">{appointment.doctor}</p>
            </div>
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${appointment.type === "dentist" ? "bg-blue-500" : "bg-orange-200"
                }`}
            >
              {appointment.type === "dentist" ? "🦷" : "🏃"}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SimpleAppointmentCard