import React from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import UserContext from "./UserContext";
import { auth } from "../firebase";
import {
  browserLocalPersistence,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
} from "@firebase/auth";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import enterNow from "../public/EnterNow.svg";
import Image from "next/image";

const LoginButton = () => {
  const getUser = async (user) => {
    const docSnap = await getDoc(doc(db, "users", user.uid));
    if (!docSnap.exists()) {
      console.log(user);
      setDoc(doc(db, "users", user.uid), {
        userName: user.displayName,
        uid: user.uid,
        joinTime: Timestamp.now(),
        friendList: [],
        pendingList: [],
        cardList: {},
        score: 0,
      });
      setUser({
        userName: user.displayName,
        uid: user.uid,
        joinTime: Timestamp.now(),
        friendList: [],
        pendingList: [],
        cardList: {},
        score: 0,
      });
    } else {
      setUser(docSnap.data());
    }
  };

  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const signin = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((user, setUser) => {
        // console.log(user);
        getUser(user.user, setUser);
        router.push("/collection");
      })
      .catch((error) => {
        console.log(error);
        console.log("fail sign in");
        router.push("/");
      });
  };

  const login = () => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        signin();
      })
      .catch((error) => {
        console.log(error);
        router.push("/");
      });
  };

  return (
    <button onClick={login}>
      <Image className=" opacity-80 scale-95" src={enterNow} />
    </button>
  );
};

export default LoginButton;
