import React from 'react'

const mockSchedule = [
  {
    day: 'Mon',
    date: 25,
    times: ['10:00', '11:00', '12:00'],
    selected: false,
  },
  {
    day: 'Tues',
    date: 26,
    times: ['08:00', '09:00', '10:00'],
    selected: true,
    selectedTime: '09:00',
  },
  {
    day: 'Wed',
    date: 27,
    times: ['12:00', '13:00'],
    selected: false,
  },
  {
    day: 'Thurs',
    date: 28,
    times: ['10:00', '11:00'],
    selected: false,
    highlightedTime: '11:00',
  },
  {
    day: 'Fri',
    date: 29,
    times: ['14:00', '16:00'],
    selected: false,
  },
  {
    day: 'Sat',
    date: 30,
    times: ['12:00', '14:00', '15:00'],
    selected: false,
    highlightedTime: '12:00',
  },
  {
    day: 'Sun',
    date: 31,
    times: ['09:00', '10:00', '11:00'],
    disabled: true,
  },
];

function CalendarView() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">October 2021</h2>
        <div className="space-x-2">
          <button className="text-xl text-gray-400 hover:text-gray-600">&lt;</button>
          <button className="text-xl text-gray-400 hover:text-gray-600">&gt;</button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 gap-4">
        {mockSchedule.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-sm ${day.disabled ? 'text-gray-400' : 'text-gray-700'
              }`}
          >
            <div className="font-medium">{day.day}</div>
            <div
              className={`text-lg font-semibold px-3 py-1 rounded-full mt-1 ${day.selected ? 'bg-indigo-100 text-indigo-700' : ''
                }`}
            >
              {day.date}
            </div>
            <div className="mt-2 flex flex-col items-center space-y-1">
              {day.times.map((time, i) => {
                const isSelected = time === day.selectedTime;
                const isHighlighted = time === day.highlightedTime;
                return (
                  <div
                    key={i}
                    className={`px-3 py-1 rounded-full ${isSelected
                        ? 'bg-indigo-700 text-white font-semibold'
                        : isHighlighted
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'text-gray-600'
                      }`}
                  >
                    {time}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarView