import { Product } from "../Model/Product";

export default function getProducts(): Product[] {
  if(process.env.NODE_ENV === "development") {
    return getProductsMock();
  }
  return getProductsAPI();
}
export function getProductsAPI(): Product[] {
  console.log("ignacio");
  return [
    {
      id: 10,
      description: "sadfsadf",
      price: 10
    },
    {
      id: 11,
      description: "sadfsadf",
      price: 21
    },
    {
      id: 14,
      description: "sadfsadf",
      price: 23
    },
    {
      id: 15,
      description: "sadfsadf",
      price: 23
    },
    {
      id: 16,
      description: "sadfsadf",
      price: 23
    }
  ] 
}

export function getProductsMock(): Product[] {
  console.log("ignacio");
  return [
    {
      id: 10,
      description: "sadfsadf",
      price: 10
    },
    {
      id: 11,
      description: "sadfsadf",
      price: 21
    },
    {
      id: 14,
      description: "sadfsadf",
      price: 23
    },
    {
      id: 15,
      description: "sadfsadf",
      price: 23
    },
    {
      id: 16,
      description: "sadfsadf",
      price: 23
    }
  ] 
}