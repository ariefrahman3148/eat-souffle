import dbConnect from "../../../util/mongo";
import Promo from "../../../models/Promo";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies
  } = req;
//   const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const promo = await Promo.findById(id);
      res.status(200).json(promo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    try {
      const promo = await Promo.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(promo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    // if(!token || token !== process.env.token){
    //   return res.status(401).json("Not authenticated!")
    // }
    try {
      await Promo.findByIdAndDelete(id);
      res.status(200).json("The Promo has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}