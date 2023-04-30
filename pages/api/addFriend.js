import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  const code =
    req.body.user > req.body.friend
      ? req.body.user + "_" + req.body.friend
      : req.body.friend + "_" + req.body.user;
  setDoc(doc(db, "friends", code), {
    friend: req.body.friend,
    user: req.body.user,
    name1: req.body.name1,
    name2: req.body.name2,
    status: false,
  })
    .then(() => {
      res.status(200).json();
    })
    .catch((e) => {
      console.log(e);
    });
}
