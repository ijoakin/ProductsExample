import { useEffect, useState } from "react";
import { Product } from "../../Model/Product";
import getProducts from "../../Services/ProductService";
interface ProductProps {
  title: string;
}
export function ProductComponent(props: ProductProps) {
  const initialValue: Product[] = [];
  const [productValue, setValue] = useState(initialValue);

  useEffect(() => {
    getProducts().then((reponse) => {
      setValue(reponse);
    });
  }, []);

  return (
    <div className="table-responsive">
      <span>Cantidad de productos: {productValue.length}</span>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productValue
            ? productValue.map((p: Product) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.description}</td>
                  <td>{p.price}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}
