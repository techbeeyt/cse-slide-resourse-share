"use client";

import TodaysClass from "./components/TodaysClass";
import UpcomingEventList from "./components/UpcomingEventList/UpcomingEventsList";
import ContentContainer from "./components/container/ContentContainer";
import PageContainer from "./components/container/PageContainer";
import PrimaryContainer from "./components/container/PrimaryContainer";

export default async function Home() {
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
              action={() => {}}
            >
              <UpcomingEventList />
            </ContentContainer>
            <div className="bg-transparent w-full h-8"></div>
            <ContentContainer
              title="Today's Classes"
              actionLabel="See all"
              action={() => {}}
            >
              <TodaysClass />
            </ContentContainer>
          
          </PrimaryContainer>
        </div>

        <div className="col-span-0 md:col-span-3 hidden md:block p-4 relative">
          <PrimaryContainer
            title="Messages"
            divider
            subtitle="See all"
            subtitleClickAction={() => {}}
          >
            Here you can do chat..
          </PrimaryContainer>
        </div>
      </div>
    </PageContainer>
  )
}
