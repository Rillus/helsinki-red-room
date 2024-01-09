import {AiFillCaretRight} from "react-icons/ai";
// create a loop of 30 items
const collectionMenu = [];
const collectionDetails = [
  {
    'name': 'Manchester United fans scrapbook from Busby Babes era',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/manchester-united-fans-scrapbook-from-busby-babes-era/'
  },
  {
    'name': 'UCL final 99 match programme',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/ucl-final-99-match-programme/'
  },
  {
    'name': 'Manchester United Medallion Collection 98/99 season',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/manchester-united-medallion-collection-98-99-season/'
  },
  {
    'name': 'George Best jacket from George Best Boutique',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/george-best-jacket-from-george-best-boutique/'
  },
  {
    'name': 'Wes Brown match worn England shirt',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/wes-brown-match-worn-england-shirt/'
  },
  {
    'name': 'Wes Brown match worn / issue shirt UCL 2008/09 season',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/wes-brown-match-worn-issue-shirt-ucl-2008-09-season/'
  },
  {
    'name': 'Roy Keane match worn / issue shirt from 98/99 season',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/roy-keane-match-worn-issue-shirt-from-98-99-season/'
  },
  {
    'name': 'Tom Clare testimonial shirt – tribute to Sir Tom',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/tom-clare-testimonial-shirt-tribute-to-sir-tom/'
  },
  {
    'name': 'Match kit from 1990/91 season',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/match-kit-from-1990-91-season/'
  },
  {
    'name': 'Stanley Chow’s art: George Best',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/stanley-chows-art-george-best/'
  },
  {
    'name': 'Two hand painted Keymen George Best figures',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/two-hand-painted-keymen-george-best-figures/'
  },
  {
    'name': 'FA Cup 1985 final celebration picture signed by Robbo',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/fa-cup-1985-final-celebration-picture-signed-by-robbo/'
  },
  {
    'name': 'Duncan Edwards 1st England match programme',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/duncan-edwards-1st-england-match-programme/'
  },
  {
    'name': 'Duncan Edwards 1st United match programme',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/duncan-edwards-1st-united-match-programme/'
  },
  {
    'name': 'The Red Devils souvenir magazine',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/the-red-devils-souvenir-magazine/'
  },
  {
    'name': 'Duncan Edwards book – Tackle Soccer This Way',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/duncan-edwards-book-tackle-soccer-this-way/'
  },
  {
    'name': 'Daily Express newspaper 7th of February, 1958',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/daily-express-newspaper-7th-of-february-1958/'
  },
  {
    'name': 'Daily Mail newspaper 8th of February, 1958',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/daily-mail-newspaper-8th-of-february-1958/'
  },
  {
    'name': '1958 fan rosette',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/1958-fan-rosette/'
  },
  {
    'name': 'Stanley Chow’s art: Bruno Fernandes',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/stanley-chows-art-bruno/'
  },
  {
    'name': 'Stanley Chow’s art: Marcus Rashford',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/stanley-chows-art-marcus-rashford/'
  },
  {
    'name': 'Stanley Chow’s art: Zlatan Ibrahimovic',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/stanley-chows-art-marcus-rashford/'
  },
  {
    'name': 'Stanley Chow’s art: Roy Keane',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/stanley-chows-art-roy-keane/'
  },
  // {
  //   'name': 'Stanley Chow’s art: United kits and players',
  //   'iframe': 'https://www.helsinkiredroom.com/portfolio-item/stanley-chows-art-united-kits-and-players/'
  // },
  {
    'name': 'Sir Alex Ferguson training top',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/sir-alex-ferguson-training-top/'
  },
  {
    'name': 'Duncan Edwards Match worn England shirt',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/duncan-edwards-match-worn-england-shirt/'
  },
  {
    'name': 'Match Programme from 1957',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/match-programme-from-1957/'
  },
  {
    'name': 'George Best testimonial programme',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/george-best-testimonial-programme/'
  },
  {
    'name': 'Pennant from c.1968',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/pennant-from-c-1968/'
  },
  {
    'name': 'Luke Shaw match worn shirt',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/luke-shaw-match-worn-shirt/'
  },
  {
    'name': 'Wes Brown match worn boots',
    'iframe': 'https://www.helsinkiredroom.com/portfolio-item/wes-brown-match-worn-boots/'
  },
]

for (let i = 1; i <= collectionDetails.length; i++) {
  collectionMenu.push({
    id: i,
    name: collectionDetails[i-1].name,
    link: "/collection/"+i,
    icon: <p className="Menu-linkLeft">{i}</p>,
    actionIcon: <AiFillCaretRight className="Menu-linkRight" />,
    classes: "Menu-link--collection",
  });
}

export default {
  collection: collectionMenu,
  details: collectionDetails
};

