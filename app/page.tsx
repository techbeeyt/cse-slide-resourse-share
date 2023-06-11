import moment from "moment";
import { getEvents } from "./actions/getEvents";
import { getRoutines } from "./actions/getRoutine";
import TodaysClassList from "./components/TodaysClassList/TodaysClassList";
import UpcomingEventList from "./components/UpcomingEventList/UpcomingEventsList";
import PageContainer from "./components/container/PageContainer";
import PrimaryContainer from "./components/container/PrimaryContainer";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const eventData = getEvents();
  const routineData = getRoutines();

  const [events, routines] = await Promise.all([eventData, routineData]);
  const time = moment().format('hh:mm A');

  return (
    <PageContainer>
      <div className="grid grid-cols-12 pr-4 md:pr-0">
        <div className="col-span-12 md:col-span-9 py-4">
          <PrimaryContainer
            title="Home"
            largeTitle
            subtitle={time}
            divider
          >
            <UpcomingEventList events={events} />
            <div className="bg-transparent w-full h-2"></div>
            <TodaysClassList routines={routines} />
          </PrimaryContainer>
        </div>

        <div className="col-span-0 md:col-span-3 hidden md:block p-4 relative">
          <PrimaryContainer
            title="Notifications"
            divider
            subtitle="See all"
          >
            Notifications will be listed here..
          </PrimaryContainer>
        </div>
      </div>
    </PageContainer>
  )
}
