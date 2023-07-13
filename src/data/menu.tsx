import {
  // AiFillCaretDown,
  AiFillCaretRight, AiFillHeart, AiFillInfoCircle} from "react-icons/ai";
// import {IoShirt} from "react-icons/io5";
// import {FaTrophy} from "react-icons/fa";
import {FaTicketSimple} from "react-icons/fa6";

export default {
  menu: [
    {
      id: 'about',
      name: 'About Red Room on Tour',
      actionType: 'external',
      link: "https://www.helsinkiredroom.com/hrr-on-tour/",
      icon: <AiFillInfoCircle className="Menu-linkLeft" />,
      actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
      subMenu: []
    },
    {
      id: 'ny',
      name: 'Pre-book New York',
      link: "/tickets/new-york",
      icon: <div className="TicketIcon"><FaTicketSimple className="Menu-linkLeft" /><span>NY</span></div>,
      actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
      subMenu: []
    },
    {
      id: 'sd',
      name: 'Pre-book San Diego',
      link: "/tickets/san-diego",
      icon: <div className="TicketIcon"><FaTicketSimple className="Menu-linkLeft" /><span>SD</span></div>,
      actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
      subMenu: []
    },
    {
      id: 'sponsors',
      name: 'Our Partners',
      actionType: 'external',
      link: "https://www.helsinkiredroom.com/on-tour-partners/",
      icon: <AiFillHeart className="Menu-linkLeft" />,
      actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
      subMenu: []
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

