import React from 'react';
import AnatomySection from './subComponents/AnatomySection';
import HealthStatusCards from './subComponents/HealthStatusCards';
import ActivityFeed from './subComponents/ActivityFeed';
import CalendarView from './subComponents/CalendarView';
import UpcomingSchedule from './subComponents/UpcomingSchedule';
import SimpleAppointmentCard from './SimpleAppointmentCard';

function DashboardMainContent() {
  return (
    <main className="flex-1 p-6 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-600">This Week</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side */}
        <div className="flex flex-col space-y-6">
          {/* Top Row (Anatomy + Health cards side by side) */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <AnatomySection />
            </div>
            <div className="flex-1">
              <HealthStatusCards />
            </div>
          </div>

          {/* Bottom: ActivityFeed */}
          <ActivityFeed />
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <CalendarView />
          <SimpleAppointmentCard />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
}

export default DashboardMainContent;
