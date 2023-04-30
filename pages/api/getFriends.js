import { db } from "../../firebase";
import { collection, where, query, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  const output = [];

  const q = await query(
    collection(db, "friends"),
    (where("user", "==", req.body.friend), where("status", "==", true)),
    or(where("friend", "==", req.body.friend), where("status", "==", true))
  );
  const Docs = await getDocs(q).catch((error) => {
    console.log(error);
  });
  Docs.forEach((doc) => {
    output.push(doc.data());
  });

  res.status(200).json(output);
}
