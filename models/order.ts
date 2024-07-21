import { Model, Schema, Types, model } from "mongoose";

interface IShippingDetails {
  name: String;
  cellphone: String;
  location: String;
  address: String;
}

interface IItem {
  id: Number;
  title: String;
  img: String;
  price: String;
  quantity: Number;
}

export interface IOrder {
  createdAt: Date;
  user: Types.ObjectId;
  price: Number;
  shippingCost: Number;
  items: IItem[];
  shippingDetails: IShippingDetails;
  status: String;
  total: Number;
}

const OrderSchema = new Schema<IOrder>({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  shippingCost: {
    type: Number,
    required: true,
  },
  items: {
    type: [
      {
        id: {
          type: Number,
          required: true,
        },
        img: {
          type: String,
          required: true,
        },
        price: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  shippingDetails: {
    name: {
      type: String,
      required: true,
    },
    cellphone: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  status: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const Order: Model<IOrder> = model<IOrder>("Order", OrderSchema);

export default Order;
