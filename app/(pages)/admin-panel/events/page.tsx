import GoBack from '@/app/components/GoBack';
import React from 'react'
import PrimaryContainer from '@/app/components/container/PrimaryContainer';
import AddEventModalBtn from './components/AddEventModalBtn';
import { getEvents } from '@/app/actions/getEvents';
import moment from 'moment';

const EventsPage = async () => {
  const events = await getEvents();
  return (
    <div className="p-4">
      <div className="flex justify-between items-center gap-3 mb-4">
        <GoBack label="Go Back" />
        <AddEventModalBtn />
      </div>

      <PrimaryContainer
        title='Events'
      >
        <div>
          <table className="table-type-1">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Event Date</th>
                <th>Event Time</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                events.map((event, index) => (
                  <tr key={index}>
                    <td>{event.title}</td>
                    <td>{moment(event.date).format("DD-MM-YYYY")}</td>
                    <td>{moment(event.time).format("HH:MM a")}</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Edit</button>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </PrimaryContainer>
    </div>
  )
}

export default EventsPage;
