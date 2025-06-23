import Loading from "@/components/organisms/Loading";
import Store from "@/Store";
import "@/styles/globals.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react'
import 'remixicon/fonts/remixicon.css'

export default function App({ Component, pageProps }) {


  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("bubblegum");

    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);

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


  let persistor = persistStore(Store)

  return (
    <Provider store={Store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
  // ;
}
