import { getEvents } from "./actions/getEvents";
import UpcomingEventList from "./components/UpcomingEventList/UpcomingEventsList";
import ContentContainer from "./components/container/ContentContainer";
import PageContainer from "./components/container/PageContainer";
import PrimaryContainer from "./components/container/PrimaryContainer";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const events = await getEvents();
  console.log(events);
  return (
    <PageContainer>
      <div className="grid grid-cols-12 pr-4 md:pr-0">
        <div className="col-span-12 md:col-span-9 py-4">
          <PrimaryContainer
            title="Home"
            largeTitle
            subtitle="Good Morning"
            divider
          >
            <ContentContainer
              title="Upcoming Events"
              actionLabel="See all"
            >
              <UpcomingEventList events={events} />
            </ContentContainer>
            <div className="bg-transparent w-full h-8"></div>
            <ContentContainer
              title="Today's Classes"
              actionLabel="See all"
            >
              {
                events.map((item: any, index: number) => {
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          
                          <div className="flex flex-col ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.description}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex flex-col ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })  

              }
            </ContentContainer>
          
          </PrimaryContainer>
        </div>

        <div className="col-span-0 md:col-span-3 hidden md:block p-4 relative">
          <PrimaryContainer
            title="Messages"
            divider
            subtitle="See all"
          >
            Here you can do chat..
          </PrimaryContainer>
        </div>
      </div>
    </PageContainer>
  )
}
