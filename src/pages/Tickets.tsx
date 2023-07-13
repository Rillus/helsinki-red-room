import Ticketlab from "../components/Ticketlab";

const Tickets = ({location}: {location: any}) => {
  return <div>
    <h1>Tickets for {location}</h1>
    <Ticketlab key={location} location={location} />
  </div>;
};

export default Tickets;
