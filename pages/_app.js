/* eslint-disable camelcase */
import { Teko, Pirata_One } from "next/font/google";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import UserContext from "../components/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase";

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

  const updateUserContext = async (currentUser) => {
    const docSnap = await getDoc(doc(db, "users", currentUser.uid));
    setUser(...user, docSnap.data());
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        updateUserContext(currentUser);
      }
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
