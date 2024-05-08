import express from "express";
import prisma from "@repo/db/client";
import { Provider, Status } from "@prisma/client";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Healthy Server!" });
});

app.post("/bob-webhook", async (req, res) => {
  console.log(req.body);
  const {
    user_identifier,
    amount,
    token,
    finalStatus,
  }: {
    user_identifier: number;
    amount: number;
    token: string;
    finalStatus: string;
  } = req.body;
  // do some db manipulation
  const status =
    finalStatus === "success"
      ? Status.SUCCESSFUL
      : finalStatus === "failure"
        ? Status.FAILED
        : Status.PROCESSIONG;
  try {
    const record = await prisma.onRampTransaction.update({
      where: {
        token,
        amount,
        userId: user_identifier,
        provider: Provider.BOB,
      },
      data: {
        status: status,
      },
    });
    console.log(record);
    if (record) {
      res.status(200).json({
        message: "Success",
      });
    } else {
      res.status(404).json({
        message: "Failure!",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Failure!",
    });
  }
});

app.post("/sbi-webhook", async (req, res) => {
  const {
    user_identifier,
    amount,
    token,
    finalStatus,
  }: {
    user_identifier: number;
    amount: number;
    token: string;
    finalStatus: string;
  } = req.body;
  // do some db manipulation
  const status =
    finalStatus === "success"
      ? Status.SUCCESSFUL
      : finalStatus === "failure"
        ? Status.FAILED
        : Status.PROCESSIONG;

  try {
    const record = await prisma.onRampTransaction.update({
      where: {
        token,
        amount,
        userId: user_identifier,
        provider: Provider.SBI,
      },
      data: {
        status: status,
      },
    });
    if (record) {
      res.status(200).json({
        message: "Success",
      });
    } else {
      res.status(404).json({
        message: "Failure!",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Failure!",
    });
  }
});

app.post("/icici-webhook", async (req, res) => {
  const {
    user_identifier,
    amount,
    token,
    finalStatus,
  }: {
    user_identifier: number;
    amount: number;
    token: string;
    finalStatus: string;
  } = req.body;
  // do some db manipulation
  const status =
    finalStatus === "success"
      ? Status.SUCCESSFUL
      : finalStatus === "failure"
        ? Status.FAILED
        : Status.PROCESSIONG;

  try {
    const record = await prisma.onRampTransaction.update({
      where: {
        token,
        amount,
        userId: user_identifier,
        provider: Provider.ICICI,
      },
      data: {
        status: status,
      },
    });
    if (record) {
      res.status(200).json({
        message: "Success",
      });
    } else {
      res.status(404).json({
        message: "Failure!",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Failure!",
    });
  }
});

app.listen(3002, () => {
  console.log("webhook running at 3002");
});
