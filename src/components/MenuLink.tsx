import {IconType} from "react-icons";
import {Link} from "react-router-dom";

export default function MenuLink({ name, link, icon, actionIcon, actionType, classes, subMenu }: {
  name: string, icon: IconType, actionIcon: IconType, actionType?: string, link?: string, classes?: string, subMenu?
}) {

  function LinkContents() {
    return (
      <>
        {icon}
        <p className="p-5">{name}</p>
        {actionIcon}
      </>
    )
  }
  function ThisLink() {
    if (actionType === 'external') {
      return (
        <a
          className={`Menu-link ${classes || ''}`}
          href={link}
          target="_blank"
        >
          <LinkContents />
        </a>
      )
    } else {
      return (
        <Link to={link} className={`Menu-link ${classes || ''}`}>
          <LinkContents/>
        </Link>
      )
    }
  }

  return (
    <div className="w-full">

      <ThisLink />

      {subMenu && subMenu.map((subItem) => (
        <MenuLink
          key={subItem.id}
          classes={subItem.classes || ''}
          id={subItem.id}
          name={subItem.name}
          actionType={subItem.actionType}
          link={subItem.link}
          icon={subItem.icon}
          actionIcon={subItem.actionIcon} />
      ))}
    </div>
  )
}

