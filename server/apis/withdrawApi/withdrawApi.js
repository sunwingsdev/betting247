const express = require("express");
const { ObjectId } = require("mongodb");
const withdrawApi = (withdrawsCollection, usersCollection) => {
  const router = express.Router();

  // --------- add a withdraw
  router.post("/", async (req, res) => {
    const withdrawInfo = req.body;
    withdrawInfo.pbuAmount = parseFloat(withdrawInfo.pbuAmount);
    withdrawInfo.bdtAmount = parseFloat(withdrawInfo.bdtAmount);
    withdrawInfo.status = "pending";
    withdrawInfo.createdAt = new Date();
    // Decrement the user's balance
    await usersCollection.updateOne(
      { _id: new ObjectId(withdrawInfo.userId) },
      { $inc: { balance: -withdrawInfo.pbuAmount } }
    );

    const result = await withdrawsCollection.insertOne(withdrawInfo);
    res.send(result);
  });

  //   get all withdraws
  router.get("/", async (req, res) => {
    try {
      const result = await withdrawsCollection
        .aggregate([
          {
            $addFields: {
              userId: { $toObjectId: "$userId" },
            },
          },
          {
            $lookup: {
              from: "users",
              localField: "userId",
              foreignField: "_id",
              as: "userInfo",
            },
          },
          {
            $unwind: {
              path: "$userInfo",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $project: {
              "userInfo.password": 0,
            },
          },
        ])
        .toArray();

      res.send(result);
    } catch (error) {
      console.error("Error fetching deposits:", error);
      res.status(500).send({ error: "Failed to fetch deposits" });
    }
  });

  //   update withdraw status
  router.patch("/update-status/:id", async (req, res) => {
    const { id } = req.params;
    const result = await withdrawsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: "approved" } }
    );
    res.send(result);
  });

  return router;
};
module.exports = withdrawApi;
