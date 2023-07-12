import {
  // AiFillCaretDown,
  AiFillCaretRight, AiFillHeart, AiFillInfoCircle} from "react-icons/ai";
// import {IoShirt} from "react-icons/io5";
// import {FaTrophy} from "react-icons/fa";
import {FaTicketSimple} from "react-icons/fa6";
import Ticketlab from "../components/Ticketlab";

export default {
  menu: [
    {
      id: 'about',
      name: 'About Red Room on Tour',
      link: "#",
      icon: <AiFillInfoCircle className="Menu-linkLeft" />,
      actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
    },
    {
      id: 'ny',
      name: 'Pre-book New York',
      link: "/tickets/new-york",
      icon: <FaTicketSimple className="Menu-linkLeft" />,
      actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
    },
    {
      id: 'sd',
      name: 'Pre-book San Diego',
      link: "/tickets/san-diego",
      icon: <FaTicketSimple className="Menu-linkLeft" />,
      actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
      pageContent: <Ticketlab url="https://ticketlab.co.uk" />,
    },
    {
      id: 'sponsors',
      name: 'Our Sponsors',
      actionType: 'external',
      link: "#",
      icon: <AiFillHeart className="Menu-linkLeft" />,
      actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
    },
  ]
};

/* TODO: Collection menu item */
// {
//   id: 'collection',
//   name: 'The Collection',
//   link: "#",
//   icon: <IoShirt className="Menu-linkLeft" />,
//   actionIcon: <AiFillCaretDown className="Menu-linkRight" />,
//   subMenu: [
//     {
//       id: 'collection-1',
//       name: 'Item the first',
//       link: "#",
//       icon: <p className="Menu-linkLeft">1</p>,
//       actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
//       classes: "Menu-link--collection",
//     },
//     {
//       id: 'collection-2',
//       name: 'Item the second',
//       link: "#",
//       icon: <p className="Menu-linkLeft">2</p>,
//       actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
//       classes: "Menu-link--collection",
//     },
//   ],
// },

