import { db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";

export default async function handler(req, res) {
  updateDoc(doc(db, "friends", req.body.friendID), { status: true })
    .then(() => {})
    .catch((e) => {
      console.log(e);
      res.status(400).json();
      return;
    });
  res.status(200).json();
}
