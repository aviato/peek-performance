export default function(server) {
  
  // Day 1 timeslots
  server.create('timeslot',{
    date: '2021-06-04',
    startTime: '10:00',
    endTime: '11:00',
    activityName: 'Activity 1',
    availableSpots: 10,
    bookedCount: 0,
    maxGuests: 10
  });
  server.create('timeslot',{
    date: '2021-06-04',
    startTime: '11:00',
    endTime: '12:00',
    activityName: 'Activity 1',
    availableSpots: 7,
    bookedCount: 3,
    maxGuests: 10
  });
  server.create('timeslot',{
    date: '2021-06-04',
    startTime: '13:00',
    endTime: '14:00',
    activityName: 'Activity 2',
    availableSpots: 14,
    bookedCount: 1,
    maxGuests: 15
  });
  
  
  // Day 2 timeslots
  server.create('timeslot',{
    date: '2021-06-05',
    startTime: '10:00',
    endTime: '11:00',
    activityName: 'Activity 1',
    availableSpots: 9,
    bookedCount: 1,
    maxGuests: 10
  });
  server.create('timeslot',{
    date: '2021-06-05',
    startTime: '10:00',
    endTime: '12:00',
    activityName: 'Activity 2',
    availableSpots: 0,
    bookedCount: 15,
    maxGuests: 15
  });
  server.create('timeslot',{
    date: '2021-06-05',
    startTime: '11:30',
    endTime: '13:00',
    activityName: 'Activity 2',
    availableSpots: 10,
    bookedCount: 5,
    maxGuests: 15
  });
  server.create('timeslot',{
    date: '2021-06-05',
    startTime: '12:30',
    endTime: '14:00',
    activityName: 'Activity 1',
    availableSpots: 0,
    bookedCount: 10,
    maxGuests: 10
  });
  server.create('timeslot',{
    date: '2021-06-05',
    startTime: '15:00',
    endTime: '16:30',
    activityName: 'Activity 1',
    availableSpots: 8,
    bookedCount: 2,
    maxGuests: 10
  });
  
  
  // Day 3 timeslots
  server.create('timeslot',{
    date: '2021-06-06',
    startTime: '09:00',
    endTime: '12:00',
    activityName: 'Activity 1',
    availableSpots: 0,
    bookedCount: 10,
    maxGuests: 10
  });
  server.create('timeslot',{
    date: '2021-06-06',
    startTime: '10:00',
    endTime: '14:00',
    activityName: 'Activity 3',
    availableSpots: 5,
    bookedCount: 0,
    maxGuests: 5
  });
  server.create('timeslot',{
    date: '2021-06-06',
    startTime: '11:00',
    endTime: '12:00',
    activityName: 'Activity 2',
    availableSpots: 13,
    bookedCount: 2,
    maxGuests: 15
  });
  server.create('timeslot',{
    date: '2021-06-06',
    startTime: '13:00',
    endTime: '16:30',
    activityName: 'Activity 2',
    availableSpots: 15,
    bookedCount: 0,
    maxGuests: 15
  });
  server.create('timeslot', {
    date: '2021-06-06',
    startTime: '13:00',
    endTime: '16:00',
    activityName: 'Activity 1',
    availableSpots: 4,
    bookedCount: 6,
    maxGuests: 10
  });
  server.create('timeslot',{
    date: '2021-06-06',
    startTime: '16:30',
    endTime: '18:00',
    activityName: 'Activity 3',
    availableSpots: 3,
    bookedCount: 2,
    maxGuests: 5
  });
}