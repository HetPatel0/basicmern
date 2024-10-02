const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Clients = require("./client");
// const client = require("./client");
const cors = require("cors");



mongoose.connect("mongodb+srv://hetp5852:patelhet123@cluster0.qwpgm.mongodb.net/Bank_management").then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(cors());


//get all
    app.get("/clients", async (req, res) => {
        const clients = await Clients.find();
        res.send(clients);
    })
//get by id
    app.get("/clients/:id", async (req, res) => {
        const clients = await Clients.findOne({ _id: req.params.id });
        res.send(clients);
    })
//create
    app.post("/clients", async (req, res) => {
        const cli = new Clients({ ...req.body });
        const ans = await cli.save();
        res.send(ans);

    })
    
//update
app.patch("/clients/:id", async (req, res) => {
    try {
      const updatedClient = await Clients.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true } // Return the updated document
      );
      if (!updatedClient) {
        return res.status(404).send("Client not found"); // Handle not found case
      }
      res.send(updatedClient);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating client"); // Handle errors
    }
  });
//delete
    app.delete("/clients/:id", async (req, res) => {
        const ans = await Clients.deleteOne({ _id: req.params.id });
        res.send(ans);

    }) 

    app.listen(8000,()=>console.log("server is connected"));

})