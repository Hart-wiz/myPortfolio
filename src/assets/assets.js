import avatar from "./avatar.jpg";
import qrcode from "./qrcode.png"
import weatherapp from "./weatherapp.png"
import tream from "./tream.png"
import html from "./html.webp";
import css from "./css3.png";
import js from "./js.webp";
import nodejs from "./nodejs.png";
import python from "./pytext.png";
import postgres from "./postgres.png"



export const profile = {
  image: avatar,
  description: "full Stack developer",
  country: "Nigeria",
  skill: "reactjs, nextjs, nodejs, expressjs and sql dbms",
  about:" Hi, I’m Njimogu Wisdom (The Wiz) — a software engineer with a background in medical laboratory sciences. I combine my passion for technology and healthcare to create innovative solutions that improve lives. With expertise in software engineering and chemical pathology, I focus on developing tools that bridge the gap between medicine and technology. My goal is to build applications that enhance diagnostics, patient care, and healthcare efficiency. From AI-powered tools to data-driven applications, I’m driven by the potential to revolutionize the medical field through technology."
};



export const projects = [
  {
    image: qrcode,
    description: "converts texts and images to qrcodes (security&professionalism)",
    link: "https://qr-generate-xi.vercel.app/",
  },
  {
    image: weatherapp,
    description: "for quick weather and parameter check",
    link: "https://qr-generate-xi.vercel.app/",
  },
  {
    image: tream,
    description: "movie app like netflix",
    link: "https://tream-app.vercel.app/",
  },
];


export const skills = [
  html, css, js, python, nodejs, postgres
]