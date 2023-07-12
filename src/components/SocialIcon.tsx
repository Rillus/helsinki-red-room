import {IconType} from "react-icons";

export default function SocialIcon ({ link, icon }: { link: string, icon: IconType }) {
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
