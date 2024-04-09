/* const express = require('express')*/
import express from "express";
/* const mongoose = require('mongoose'); */
import mongoose from "mongoose";
/* require(`dotenv`).config() */
import { config } from "dotenv";
import { authorRoute } from './services/routes/author.route.js';

/* app.get('/', (req, res) => {
  res.send('Hello World!')
}) */

config();

const app = express()
const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/authors", authorRoute);


const initserver = async () => {
    try {
        await mongoose.connect(process.env.DBURL);

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    } catch (err) {
        console.log("Server connection failed ", err)
    }
}

initserver();

