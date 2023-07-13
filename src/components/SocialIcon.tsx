export default function SocialIcon ({ link, icon }: { link: string, icon: any }) {
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
