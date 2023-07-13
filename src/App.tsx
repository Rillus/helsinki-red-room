import Logo from "./assets/red-room-experience.svg";
import ManU from "./assets/manchester-united.svg";
import {Link, Outlet, useLocation} from "react-router-dom";

/* -- COMPONENTS -- */
import MenuLink from "./components/MenuLink";
import SocialIcon from "./components/SocialIcon";

/* -- DATA -- */
import menuData from "./data/menu";
import socialData from "./data/social";

const menu = menuData.menu;
const socials = socialData.socials;

function App() {
  const location = useLocation();

  let locationClass = location.pathname;
  switch (location.pathname) {
    case '/':
      locationClass = 'Home';
      break;
    case '/tickets':
      locationClass = 'Tickets';
      break;
    case '/tickets/new-york':
      locationClass = 'Tickets Tickets--NewYork';
      break;
    case '/tickets/san-diego':
      locationClass = 'Tickets Tickets--SanDiego';
      break;
    default:
      locationClass = '';
  }

  return (
    <div className={`Container ${locationClass}`}>
      <Link className="Logo" to="/">
        <img className="Logo-img" src={Logo} alt="Helsinki Red Room by Jere" />
        with Manchester&nbsp;United, Marriott&nbsp;Hotels and Marriott&nbsp;Bonvoy
      </Link>
      <div className="Menu">
        {menu.map((item) => (
          <MenuLink
            key={item.id}
            name={item.name}
            link={item.link}
            icon={item.icon}
            actionIcon={item.actionIcon}
            subMenu={item.subMenu ?? []}
          />
        ))}
      </div>

      <div className="Content">
        <Outlet />
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

      <img src={ManU} className="ManU" alt="Manchester United" />
    </div>
  );
}

export default App;
