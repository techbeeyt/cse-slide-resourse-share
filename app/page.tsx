"use client";

import { useEffect, useState } from "react";
import { getEvents } from "./actions/getEvents";
import TodaysClass from "./components/TodaysClass";
import UpcomingEvent from "./components/UpcomingEvent";
import ContentContainer from "./components/container/ContentContainer";
import PageContainer from "./components/container/PageContainer";
import PrimaryContainer from "./components/container/PrimaryContainer";
import axios from "axios";

export default async function Home() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get("/api/events")
      .then((data) => console.log(data))
  }, [])
  return (
    <PageContainer>
      <div className="grid grid-cols-12">
        <div className="col-span-9 py-4">
          <PrimaryContainer
            title="Home"
            largeTitle
            subtitle="Good Morning"
          >
            <ContentContainer
              title="Upcoming Events"
              actionLabel="See all"
              action={() => {}}
            >
              <div className="flex justify-start items-center gap-3">
                {
                  events.map((item, index) => {
                    return (
                      <UpcomingEvent
                        key={index}
                      />
                    );
                  })
                }
              </div>
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

        <div className="col-span-3 p-4 relative">
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
