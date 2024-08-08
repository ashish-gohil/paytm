import express from "express";
import prisma from "@repo/db/client";
import { Status } from "@prisma/client";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Healthy Server!" });
});
type BodyType = {
  amount: number;
  userId: number;
  token: string;
  finalStatus: string;
};
app.post("/bob-webhook", async (req, res) => {
  const { amount, userId, token, finalStatus }: BodyType = req.body;
  // do some db manipulation
  const status =
    finalStatus === "success"
      ? Status.SUCCESSFUL
      : finalStatus === "failure"
        ? Status.FAILED
        : Status.PROCESSING;
  try {
    if (finalStatus === "success") {
      prisma.$transaction(async (tx) => {
        const record = await tx.onRampTransaction.update({
          where: {
            token,
          },
          data: {
            status: status,
          },
        });
        console.log(record);
        const userUpdate = await tx.user.update({
          where: { id: userId },
          data: {
            availableBalance: {
              increment: (amount * 100),
            },
          },
        });
        if (record && userUpdate) {
          res.status(200).json({
            message: "Success",
          });
        } else {
          res.status(404).json({
            message: "Failure!",
          });
        }
      });
    } else {
      const record = await prisma.onRampTransaction.update({
        where: {
          token,
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
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Failure!",
    });
  }
});

app.post("/sbi-webhook", async (req, res) => {
  const { amount, userId, token, finalStatus }: BodyType = req.body;
  // do some db manipulation
  const status =
    finalStatus === "success"
      ? Status.SUCCESSFUL
      : finalStatus === "failure"
        ? Status.FAILED
        : Status.PROCESSING;
  try {
    if (finalStatus === "success") {
      prisma.$transaction(async (tx) => {
        const record = await tx.onRampTransaction.update({
          where: {
            token,
          },
          data: {
            status: status,
          },
        });
        console.log(record);
        const userUpdate = await tx.user.update({
          where: { id: userId },
          data: {
            availableBalance: {
              increment:( amount * 100),
            },
          },
        });
        if (record && userUpdate) {
          res.status(200).json({
            message: "Success",
          });
        } else {
          res.status(404).json({
            message: "Failure!",
          });
        }
      });
    } else {
      const record = await prisma.onRampTransaction.update({
        where: {
          token,
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
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Failure!",
    });
  }
});

app.post("/icici-webhook", async (req, res) => {
  const { amount, userId, token, finalStatus }: BodyType = req.body;
  // do some db manipulation
  const status =
    finalStatus === "success"
      ? Status.SUCCESSFUL
      : finalStatus === "failure"
        ? Status.FAILED
        : Status.PROCESSING;
  try {
    if (finalStatus === "success") {
      prisma.$transaction(async (tx) => {
        const record = await tx.onRampTransaction.update({
          where: {
            token,
          },
          data: {
            status: status,
          },
        });
        console.log(record);
        const userUpdate = await tx.user.update({
          where: { id: userId },
          data: {
            availableBalance: {
              increment: (amount * 100),
            },
          },
        });
        if (record && userUpdate) {
          res.status(200).json({
            message: "Success",
          });
        } else {
          res.status(404).json({
            message: "Failure!",
          });
        }
      });
    } else {
      const record = await prisma.onRampTransaction.update({
        where: {
          token,
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
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Failure!",
    });
  }
});

app.listen(3002, () => {
  console.log("webhook running at 3002");
});
