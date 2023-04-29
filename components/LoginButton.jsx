import React from "react";
import { useRouter } from "next/router";
// import UserContext from "./UserContext";
// import { useContext } from "react";
import { auth } from "../firebase";
import {
  browserLocalPersistence,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
} from "@firebase/auth";

const LoginButton = () => {
  const router = useRouter();
  //   const { setUser } = useContext(UserContext);

  const signin = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
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
