import { Router } from "express";
import Author from "../models/author.model.js";

export const authorRoute = Router();

/* chiamata get di tutti gli autori */
authorRoute.get("/", async (req, res, next) => {
    try {
      const authors = await Author.find();
      res.json(authors);
    } catch (err) {
      // In caso di errore, procediamo
      next(err);
    }
  });

/* chiamata post di un autore */
  authorRoute.post("/", async (req, res, next) => {
    try {
      let author = await Author.create(req.body);
      res.send(author).status(400);
    } catch (err) {
      next(err);
    }
  });

  /* chiamata get di un singolo autore */
  authorRoute.get("/:id", async (req, res, next) => {
    try {
      let author = await Author.findById(req.params.id);
      res.send(author);
    } catch (err) {
      next(err);
    }
  });

/* richiesta di delete di un singolo autore */
  authorRoute.delete("/:id", async (req, res, next) => {
    try {
      await Author.deleteOne({
        _id: req.params.id,
      });
      res.send("L'utente è stato eliminato correttamente").status(204);
    } catch (err) {
      next(err);
    }
  });

  /* richiesta PUT di un singolo autore */
  authorRoute.put("/:id", async (req, res, next) => {
    try {
      let author = await Author.findByIdAndUpdate(req.params.id, req.body, {
        new: true, 
      });
      res.send(author);
    } catch (err) {
      next(err);
    }
  });
  
  

