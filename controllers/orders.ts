import { Request, Response } from "express";
import { ObjectId } from "mongoose";
import Order, { IOrder } from "../models/order";

export const getOrders = async (req: Request, res: Response) => {
  const userId: ObjectId = req.body.userConfirm._id;
  const query = { user: userId };
  const orders = await Order.find(query);
  res.status(200).json({
    data: [...orders],
  });
};

export const createOrder = async (req: Request, res: Response) => {
  const userId: ObjectId = req.body.userConfirm._id;
  const orderData: IOrder = req.body;
  const data = {
    ...orderData,
    user: userId,
    createdAt: new Date(),
    status: "pending",
  };
  const order = new Order(data);
  await order.save();
  res.status(201).json({
    order,
  });
};
