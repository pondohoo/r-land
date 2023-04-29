import { useRouter } from "next/router";
// import UserContext from "./UserContext";
// import { useContext } from "react";
import { auth } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import {
  browserLocalPersistence,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";

const router = useRouter();
// const { setUser } = useContext(UserContext);

const getUser = async (uid) => {
  const docSnap = await getDoc(doc(db, "users", uid));
  if (!docSnap.exists()) {
  } else {
    setUser({
      name: docSnap.data().userName,
      uid: uid,
      joinTime: docSnap.data().joinTIme,
      friendList: docSnap.data().friendList,
      cardList: docSnap.data().cardList,
    });
  }
};

const login = () => {
  setPersistence(auth, browserLocalPersistence)
    .then((res) => {
      signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {
          getUser();
          router.push("/collection");
        })
        .catch((error) => {
          console.log(error);
          console.log("fail sign in");
          router.push("/");
        });
    })
    .catch((error) => {
      router.push("/");
    });
};

export default login;
