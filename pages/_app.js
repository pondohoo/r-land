/* eslint-disable camelcase */
import { Teko, Pirata_One } from "next/font/google";
import "../styles/globals.css";
import Layout from "../components/Layout";
import UserContext from "../components/UserContext";
import { useState, useEffect } from "react";
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
  const updateUserContext = async (currentUser) => {
    const docSnap = await getDoc(doc(db, "users", currentUser.uid));
    setUser({
      name: docSnap.data().userName,
      uid: currentUser.uid,
      joinTime: docSnap.data().joinTIme,
      friendList: docSnap.data().friendList,
      cardList: docSnap.data().cardList,
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        updateUserContext(currentUser);
      }
    });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className={`${teko.variable} ${pirata.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </UserContext.Provider>
  );
}
