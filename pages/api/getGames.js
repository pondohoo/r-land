// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  const output = [];

  const docs = await getDocs(collection(db, "games"));

  docs.forEach((doc) => {
    output.push(doc.data());
  });

  res.status(200).json(output);
}
