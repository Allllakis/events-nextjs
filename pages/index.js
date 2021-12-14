import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getFeaturedEvents } from "../helper/api-util";
import EventList from "../components/events/event-list";
import EventSearch from "../components/events/events-search";

const HomePage = (props) => {
  const router = useRouter();
 

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </Fragment>
  );
};


export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      events: featuredEvents
    }
  }
}
export default HomePage;
