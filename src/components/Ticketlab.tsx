export default function Ticketlab({ location }: {
  location: string
}) {
  let id = "red-room";
  if (location === "San Diego") {
    id = "3495";
  } else if (location === "New York") {
    id = "3489";
  }

  const widgetUrl = "https://ticketlab.co.uk/app/buy/build.js?2022-08-18";
  const head = document.querySelector("head");
  const script = document.createElement("script");
  script.setAttribute("src", widgetUrl);
  if (head) {
    head.appendChild(script);
  }

  return (
    <div className="w-full">
      <link rel="stylesheet" href="https://ticketlab.co.uk/app/buy/css/main.css?2022-08-18" />
      <script id="TL_buy_config" type="application/json">{`{
          "type": "venue",
          "id": "${id}",
          "locale": "UK",
          "currency": "USD",
          "currencySymbol": "$"
      }`}</script>
      <div id="TL_buy"></div>
      {/*<script src="https://js.stripe.com/v3/"></script>*/}
      <script src="https://ticketlab.co.uk/app/buy/build.js?2022-08-18"></script>
    </div>
  )
}

