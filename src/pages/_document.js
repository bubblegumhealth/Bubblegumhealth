import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("bubblegum");

    const isDark =
      savedTheme === "dark" || (!savedTheme && prefersDark);

    document.documentElement.classList.toggle("dark", isDark);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("bubblegum")) {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);




  return (
    <Html lang="en">
      <Head />
      <title>Bubblegum Health | Female Doctors for Reproductive Health & Wellness</title>
      <meta name="title" content="Bubblegum Health | Female Doctors for Reproductive Health & Wellness" />
      <meta name="description" content="Bubblegum Health connects women with experienced female doctors for reproductive health, fertility advice, menstrual care, and overall wellness. Safe, confidential, and supportive online consultations." />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.bubblegum.health" />
      <meta property="og:title" content="Bubblegum Health | Female Doctors for Reproductive Health & Wellness" />
      <meta property="og:description" content="Bubblegum Health connects women with experienced female doctors for reproductive health, fertility advice, menstrual care, and overall wellness. Safe, confidential, and supportive online consultations." />
      <meta property="og:image" content="https://vestv.nyc3.cdn.digitaloceanspaces.com/Bubblegum.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.bubblegum.health" />
      <meta property="twitter:title" content="Bubblegum Health | Female Doctors for Reproductive Health & Wellness" />
      <meta property="twitter:description" content="Bubblegum Health connects women with experienced female doctors for reproductive health, fertility advice, menstrual care, and overall wellness. Safe, confidential, and supportive online consultations." />
      <meta property="twitter:image" content="https://vestv.nyc3.cdn.digitaloceanspaces.com/Bubblegum.png" />
      <body className="antialiased">
        <div className="app w-screen h-screen">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
