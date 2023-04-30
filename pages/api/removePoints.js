import { db } from "../../firebase";
import { updateDoc, doc, increment } from "firebase/firestore";

export default async function handler(req, res) {
  updateDoc(doc(db, "users", req.body.uid), { score: increment(-3) });

  res.status(200).json();
}
