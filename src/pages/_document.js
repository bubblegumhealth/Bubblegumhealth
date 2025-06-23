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
      <body className="antialiased dark:bg-gray-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
