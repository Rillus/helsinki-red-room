import {Link} from "react-router-dom";

export default function MenuLink({ id, name, link, icon, actionIcon, actionType, classes, subMenu }: {
  id:string, name: string, link: string, icon: any, actionIcon: any, actionType?: string, classes?: string, subMenu?: any
}) {
  let customClass = '';

  if (actionType && actionType === 'openSubNav') {
    customClass = 'Menu-link--openSubNav';
  }

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
        <Link
          to={link}
          className={`Menu-link ${classes || ''}`}
        >
          <LinkContents/>
        </Link>
      )
    }
  }

  return (
    <div className={`w-full Menu-item Menu-item--${id} ${customClass}`}>

      <ThisLink />

      {subMenu && subMenu.map((subItem: any) => (
        <MenuLink
          id={subItem.id}
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

