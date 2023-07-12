import {SlSocialFacebook, SlSocialInstagram, SlSocialTwitter, SlSocialYoutube} from "react-icons/sl";
import {PiTiktokLogo} from "react-icons/pi";

export default {
  socials: [
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
}
