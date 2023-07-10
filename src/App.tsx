// import { useState } from "react";
import Logo from "./assets/logo.png";
import {SlSocialFacebook, SlSocialInstagram, SlSocialTwitter, SlSocialYoutube} from "react-icons/sl";
import {
  IoShirt,
} from "react-icons/io5";

import {
  AiFillCaretDown,
  AiFillCaretRight,
  AiFillHeart,
  AiFillInfoCircle,
} from "react-icons/ai";

import {
  PiTiktokLogo
} from "react-icons/pi";

import {
  FaTrophy
} from "react-icons/fa";
import {IconType} from "react-icons";

const menu = [
  {
    id: 'about',
    name: 'About',
    link: "#",
    icon: <AiFillInfoCircle className="Menu-linkLeft" />,
    actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
  },
  {
    id: 'collection',
    name: 'The Collection',
    link: "#",
    icon: <IoShirt className="Menu-linkLeft" />,
    actionIcon: <AiFillCaretDown className="Menu-linkRight" />,
    subMenu: [
      {
        id: 'collection-1',
        name: 'Item the first',
        link: "#",
        icon: <p className="Menu-linkLeft">1</p>,
        actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
        classes: "Menu-link--collection",
      },
      {
        id: 'collection-2',
        name: 'Item the second',
        link: "#",
        icon: <p className="Menu-linkLeft">2</p>,
        actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
        classes: "Menu-link--collection",
      },
    ],
  },
  {
    id: 'competition',
    name: 'Enter the Competition',
    link: "#",
    icon: <FaTrophy className="Menu-linkLeft" />,
    actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
  },
  {
    id: 'sponsors',
    name: 'Our Sponsors',
    link: "#",
    icon: <AiFillHeart className="Menu-linkLeft" />,
    actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
  },
];

const socials = [
  {
    id: 'facebook',
    link: "https://www.facebook.com/helsinkiredroom/",
    icon: <SlSocialFacebook />,
  },
  {
    id: 'twitter',
    link: "https://twitter.com/helsinkiredroom/",
    icon: <SlSocialTwitter />,
  },
  {
    id: 'instagram',
    link: "https://www.instagram.com/helsinkiredroom/",
    icon: <SlSocialInstagram />,
  },
  {
    id: 'youtube',
    link: "https://www.youtube.com/@helsinkiredroom",
    icon: <SlSocialYoutube />,
  },
  {
    id: 'tiktok',
    link: "https://www.tiktok.com/@helsinkiredroom",
    icon: <PiTiktokLogo />,
  }
]

function MenuLink({ name, link, icon, actionIcon, classes, subMenu }: {
  name: string, link: string, icon: IconType, actionIcon: IconType, classes:string, subMenu?
}) {
  return (
    <div className="w-full">
      <a
        className={`Menu-link ${classes || ''}`}
        href={link}
        target="_blank"
      >
        {icon}
        <p className="p-5">{name}</p>
        {actionIcon}
      </a>
      {subMenu && subMenu.map((subItem) => (
        <MenuLink
          key={subItem.id}
          classes={subItem.classes || ''}
          id={subItem.id}
          name={subItem.name}
          link={subItem.link}
          icon={subItem.icon}
          actionIcon={subItem.actionIcon} />
      ))}
    </div>
  )
}

function SocialIcon ({ link, icon }: { link: string, icon: IconType }) {
  return (
    <a
      className="Social-icon"
      href={link}
      target="_blank"
    >
      {icon}
    </a>
  )
}

function App() {
  return (
    <div className="Container">
      <div className="Logo">
        <img className="Logo-img" src={Logo} alt="Helsinki Red Room by Jere" />
      </div>
      <div className="Menu">
        {menu.map((item) => (
          <MenuLink
            key={item.id}
            name={item.name}
            link={item.link}
            icon={item.icon}
            actionIcon={item.actionIcon}
            subMenu={item?.subMenu}
          />
        ))}
      </div>

      <div className="Social">
        {socials.map((social) => (
          <SocialIcon
            key={social.id}
            link={social.link}
            icon={social.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
