import { db } from "../../firebase";
import { collection, where, query, getDocs, or, and } from "firebase/firestore";

export default async function handler(req, res) {
  const output = [];

  const q = await query(
    collection(db, "friends"),
    and(
      where("status", "==", true),
      or(where("user", "==", req.body.uid), where("friend", "==", req.body.uid))
    )
  );
  const Docs = await getDocs(q).catch((error) => {
    console.log(error);
  });
  Docs.forEach((doc) => {
    output.push(doc.data());
  });

  res.status(200).json(output);
}
