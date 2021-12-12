import React from "react";
import EventItem from "./event-item";

const EventList = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          image={event.image}
          title={event.title}
          date={event.date}
          location={event.location}
          id={event.id}
        />
      ))}
    </ul>
  );
};

export default EventList;

