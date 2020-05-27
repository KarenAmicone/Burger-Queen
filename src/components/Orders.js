import React from "react";

const PrintOrders = ({ orders }) => {
  let ordersArr = orders.map((doc) => doc.data());
  return (
    <section className="history">
      {ordersArr.map((element) => {
        return (
          <div key={Math.random()}>
            <p>{`Cliente: ${element.clientName}`}</p>
            <p>{`Fecha: ${element.createdAt.toDate()}`}</p>
            <table>
              <tbody>
                {element.orders.map((product) => {
                  return (
                    <tr>
                      <td>{product.name}</td>
                      <td>{`$ ${product.price}`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p>{`Total: $ ${element.total}`}</p>
            <hr></hr>
          </div>
        );
      })}
    </section>
  );
};

export default PrintOrders;
