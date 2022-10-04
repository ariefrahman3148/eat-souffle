import dbConnect from "../../../util/mongo";
import Promo from "../../../models/Promo";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const promos = await Promo.find();
      res.status(200).json(promos);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    try {
      const promo = await Promo.create(req.body);
      res.status(201).json(promo);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}