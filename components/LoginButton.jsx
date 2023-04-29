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
        cardList: [],
      });
    } else {
      setUser({
        name: docSnap.data().userName,
        uid: uid,
        joinTime: docSnap.data().joinTIme,
        friendList: docSnap.data().friendList,
        cardList: docSnap.data().cardList,
      });
      res.status(200).json({});
    }
  };

  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const signin = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((user) => {
        // console.log(user);
        getUser(user.user);
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
      .then((res) => {
        signin();
      })
      .catch((error) => {
        router.push("/");
      });
  };

  return <button onClick={login}>login</button>;
};

export default LoginButton;
