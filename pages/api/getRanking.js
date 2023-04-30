import { getDocs, collection, query, limit, orderBy } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  const topFive = [];
  const q = await query(
    collection(db, "users"),
    orderBy("score", "desc"),
    limit(5)
  );
  const topFiveDocs = await getDocs(q).catch((error) => {
    console.log(error);
  });
  topFiveDocs.forEach((doc) => {
    topFive.push(doc.data());
  });

  res.status(200).json(topFive);
}
