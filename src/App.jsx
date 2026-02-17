import { Linkees, CHANNEL_TYPES } from "linkees";
import "linkees/dist/style.css";
import "./custom.css";
import avatar from "./assets/avatar.jpg";
import textdecal from "./assets/textdecal.png";
import ecorche from "./assets/ecorche.webp";
import justplay from "./assets/justplay.png";
import thegreencode from "./assets/thegreencode.png";

const cardItems = [
  {
    title: "Text Decal",
    subtitle: "Dynamic Text Projection for 3D Surfaces Asset for Unity",
    type: CHANNEL_TYPES.OTHER,
    image: textdecal,
    link: "https://assetstore.unity.com/packages/slug/302653",
  },
  {
    title: "Ecorche: Portrait Anatomy",
    subtitle: "iOS, macOS, Android application",
    image: ecorche,
    link: "https://ecorche.chikalin.space",
  },
  {
    title: "Just Play",
    subtitle: "An animated short | 2020 | YouTube",
    image: justplay,
    link: "https://www.youtube.com/watch?v=pKdqm6nddFo",
  },
  {
    title: "The Green Code",
    subtitle: "A game prototype for VR Game Jam | 2022",
    image: thegreencode,
    link: "https://kirillchikalin.itch.io/the-green-code",
  },
];

function App() {
  const e = "kirill" + "@" + "chikalin.space";
  const t = "t.me" + "/" + "kirillchikalin";
  return (
    <Linkees
      name="Kirill Chikalin"
      cardItems={cardItems}
      headerAvatar={avatar}
      customFooter={
        <div className="Footer">
          <a href={"https://${t}"} target="_blank" rel="noreferrer">
            {t}
          </a>
          <a href={`mailto:${e}`}>{e}</a>
        </div>
      }
    />
  );
}

export default App;
