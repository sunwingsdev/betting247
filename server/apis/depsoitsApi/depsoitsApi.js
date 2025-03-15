const express = require("express");
const { ObjectId } = require("mongodb");

const depsoitsApi = (depositsCollection, usersCollection) => {
  const router = express.Router();

  router.post("/", async (req, res) => {
    try {
      const depositInfo = req.body;

      if (!depositInfo) {
        res.status(400).send({ message: "Bad Request" });
      }
      depositInfo.bdtAmount = parseFloat(depositInfo.bdtAmount);
      depositInfo.pbuAmount = parseFloat(depositInfo.pbuAmount);
      depositInfo.status = "pending";
      depositInfo.createdAt = new Date();
      const result = await depositsCollection.insertOne(depositInfo);
      res.send(result);
    } catch (err) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

  router.get("/", async (req, res) => {
    try {
      const deposits = await depositsCollection.find().toArray();
      res.send(deposits);
    } catch (err) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

  router.patch("/update-status/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deposit = await depositsCollection.findOne({
        _id: new ObjectId(id),
      });
      if (!deposit) {
        return res.status(404).send({ message: "Deposit not found" });
      }
      if (deposit.status !== "pending") {
        return res.status(400).send({ message: "Deposit is not pending" });
      }
      const user = await usersCollection.findOne({
        _id: new ObjectId(deposit.userId),
      });

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      await depositsCollection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { status: "approved" } },
        { returnDocument: "after" }
      );
      const result = await usersCollection.updateOne(
        { _id: new ObjectId(deposit.userId) },
        { $inc: { balance: deposit.pbuAmount } }
      );
      res.send(result);
    } catch (err) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

  return router;
};

module.exports = depsoitsApi;
