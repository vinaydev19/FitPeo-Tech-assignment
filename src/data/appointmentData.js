export const calendarData = {
    month: "October",
    year: 2021,
    appointments: {
      25: ["10:00", "11:00"],
      26: ["08:00", "09:00"],
      27: ["12:00", "13:00"],
      28: ["10:00", "11:00"],
      29: ["14:00", "15:00"],
      30: ["15:00", "14:00"],
      31: ["09:00", "10:00", "11:00"],
    },
  }
  
  export const upcomingAppointments = [
    {
      id: 1,
      day: "Thursday",
      appointments: [
        {
          title: "Health checkup complete",
          time: "11:00 AM",
          type: "checkup",
          icon: "Stethoscope",
        },
        {
          title: "Ophthalmologist",
          time: "14:00 PM",
          type: "specialist",
          icon: "Eye",
        },
      ],
    },
    {
      id: 2,
      day: "Saturday",
      appointments: [
        {
          title: "Cardiologist",
          time: "12:00 AM",
          type: "specialist",
          icon: "Heart",
        },
        {
          title: "Neurologist",
          time: "16:00 PM",
          type: "specialist",
          icon: "Brain",
        },
      ],
    },
  ]
  
  export const todayAppointments = [
    {
      title: "Dentist",
      time: "09:00-11:00",
      doctor: "Dr Cameron Williamson",
      type: "dentist",
    },
    {
      title: "Physiotherapy Appointment",
      time: "11:00-12:00",
      doctor: "Dr Kevin Djores",
      type: "physiotherapy",
    },
  ]
  
  export const activityData = {
    weeklyAppointments: 3,
    chartData: [
      { day: "Mon", value: 20 },
      { day: "Tue", value: 45 },
      { day: "Wed", value: 30 },
      { day: "Thu", value: 60 },
      { day: "Fri", value: 25 },
      { day: "Sat", value: 40 },
      { day: "Sun", value: 35 },
    ],
  }
  