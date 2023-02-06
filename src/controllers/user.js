import User from "../models/user.js";
import { db, get, set, ref } from "../config/firebase.js";
import { uuid } from "uuidv4";

export const getUser = async (req, res) => {
  const snapshot = await get(ref(db, "users/"));
  if (snapshot) {
    const data = await snapshot.val();
    res.json(data);
  }
};

export const addUser = async (req, res) => {
  const newUser = new User(req.body);
  if (newUser) {
    try {
      await set(ref(db, "users/" + uuid()), newUser);
      res.send(202);
    } catch (err) {
      res.send(400);
    }
  }
};
