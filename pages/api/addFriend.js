import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  await setDoc(doc(db, "friends", req.body.user + "_" + req.body.friend), {
    friend: req.body.friend,
    user: req.body.user,
    name: req.body.name,
    status: false,
  });

  res.status(200).json();
}
