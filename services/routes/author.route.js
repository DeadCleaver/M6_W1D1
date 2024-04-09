import { Router } from "express";
import Author from "../models/author.model.js";

export const authorRoute = Router();

/* authorRoute.get("/", async (req, res) => {
    res.send("Sei al route principale dell'api");
  }); */

authorRoute.get("/", async (req, res, next) => {
    try {
      const authors = await Author.find();
      res.json(authors);
    } catch (err) {
      // In caso di errore, procediamo
      next(err);
    }
  });


  authorRoute.post("/", async (req, res, next) => {
    try {
      let author = await Author.create(req.body);
      res.send(author).status(400);
    } catch (err) {
      next(err);
    }
  });
