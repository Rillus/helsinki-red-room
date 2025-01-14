import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiFillHeart,
  AiFillInfoCircle
} from "react-icons/ai";
import {FaTrophy} from "react-icons/fa";
import {FaTicketSimple} from "react-icons/fa6";
import {IoShirt} from "react-icons/io5";

import collection from "./collection";

const collectionMenu = collection.collection;

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
    // {
    //   id: 'ny',
    //   name: 'Pre-book New York',
    //   link: "/tickets/new-york",
    //   icon: <div className="TicketIcon"><FaTicketSimple className="Menu-linkLeft" /><span>NY</span></div>,
    //   actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
    //   subMenu: []
    // },
    // {
    //   id: 'sd',
    //   name: 'Pre-book San Diego',
    //   link: "/tickets/san-diego",
    //   icon: <div className="TicketIcon"><FaTicketSimple className="Menu-linkLeft" /><span>SD</span></div>,
    //   actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
    //   subMenu: []
    // },
    {
      id: 'collection',
      name: 'The Collection',
      actionType: 'openSubNav',
      link: "/collection",
      icon: <IoShirt className="Menu-linkLeft" />,
      actionIcon: <AiFillCaretDown className="Menu-linkRight" />,
      subMenu: collectionMenu
    },
    // {
    //   id: 'competition',
    //   name: 'New York Competition',
    //   actionType: 'external',
    //   link: "https://www.manutd.com/en/RRSupportersClubEventNY",
    //   icon: <div className="TrophyIcon"><FaTrophy className="Menu-linkLeft" /><span>NY</span></div>,
    //   actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
    //   subMenu: []
    // },
    // {
    //   id: 'competition2',
    //   name: 'San Diego Competition',
    //   actionType: 'external',
    //   link: "https://www.manutd.com/en/RRSupportersClubEventSD",
    //   icon: <div className="TrophyIcon"><FaTrophy className="Menu-linkLeft" /><span>SD</span></div>,
    //   actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
    //   subMenu: []
    // },
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


