import React from "react";

const PrintOrders = ({ orders }) => {
  let ordersArr = orders.map((doc) => doc.data());
  return (
    <section className="history">
      {ordersArr.map((element) => {
        let dateObject = element.createdAt.toDate();
        let date = dateObject.toLocaleDateString();

        return (
          <div key={Math.random()}>
            <h3 className="title-ticket-history">{`Cliente: ${element.clientName}`}</h3>
            <h3 className="title-ticket-history">{`Fecha: ${date}`}</h3>
            <table className="history-table">
              <tbody>
                <tr key={Math.random()}>
                  <td className="history-product">Producto</td>
                  <td className="center-aligned">Cantidad</td>
                  <td className="center-aligned">Precio</td>
                </tr>
                {element.orders.map((product) => {
                  return (
                    <tr key={Math.random()}>
                      <td className="history-product">{product.name}</td>
                      <td className="center-aligned">{product.quant}</td>
                      <td className="center-aligned">{`$ ${product.price}`}</td>
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
