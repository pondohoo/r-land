/* eslint-disable camelcase */
import { Teko, Pirata_One } from "next/font/google";
import "../styles/globals.css";
import Layout from "../components/Layout";
import UserContext from "../components/UserContext";
import { useEffect, useState } from "react";

// eslint-disable-next-line new-cap
const teko = Teko({
  variable: "--teko-font",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
// eslint-disable-next-line new-cap
const pirata = Pirata_One({
  variable: "--pirata-font",
  weight: ["400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    position && (
      <UserContext.Provider value={{ user, setUser, position, setPosition }}>
        <div className={`${teko.variable} ${pirata.variable}`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </UserContext.Provider>
    )
  );
}
