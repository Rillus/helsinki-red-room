import Ticketlab from "../components/Ticketlab";

const Tickets = ({location}: {location: any}) => {
  return <div>
    <h1>Tickets for {location}</h1>
    {location === "New York" &&
      <div>
        <h2>21st - 22nd July 2023</h2>
        <h3>
          New York Marriott Marquis<br/>
          1535 Broadway, New York, NY 10036, United States
        </h3>
      </div>
    }
    {location === "San Diego" &&
      <div>
        <h2>24th - 25th July 2023</h2>
        <h3>
          San Diego Marriott Del Mar<br/>
          11966 El Camino Real, San Diego, CA 92130, United States
        </h3>
      </div>
    }
    <p>Maximum 2 tickets per reservation. Slots are limited to 30 people at a time.</p>
    <Ticketlab key={location} location={location} />
  </div>;
};

export default Tickets;
