import {Link} from "react-router-dom";

export default function MenuLink({ name, link, icon, actionIcon, actionType, classes, subMenu }: {
  name: string, link: string, icon: any, actionIcon: any, actionType?: string, classes?: string, subMenu?: any
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
          target={`_blank`}
          href={link}
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

      {subMenu && subMenu.map((subItem: any) => (
        <MenuLink
          key={subItem.id}
          classes={subItem.classes || ''}
          name={subItem.name}
          actionType={subItem.actionType}
          link={subItem.link}
          icon={subItem.icon}
          actionIcon={subItem.actionIcon} />
      ))}
    </div>
  )
}

