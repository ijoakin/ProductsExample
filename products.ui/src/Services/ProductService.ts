import axios from "axios";
import { Product } from "../Model/Product";

export default function getProducts() {
  if(process.env.NODE_ENV === "development") {
    return getProductsAPI();
  }
  return getProductsAPI();
}
export function getProductsAPI() {
  const URL = "https://localhost:5001/";

  var config = {
      headers: {'Access-Control-Allow-Origin': '*'}
  };

  return axios.get(`${URL}product`, config)
	    .then((response: any) => {
        debugger;
        return response.data;
      });
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