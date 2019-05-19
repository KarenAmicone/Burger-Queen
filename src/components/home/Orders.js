import React from 'react';
import app from 'firebase/app';
import 'firebase/firebase-firestore';

     let orders;
        app.firestore()
        .collection('orders')
        .get()
        .then(collection => {
        orders = collection.docs.map(doc => doc.data().orders);
        console.log(orders)
        });

function PrintOrders(){
    return(
        <main>
        <section id="wrapper">
        <table>
            <tbody>
                {orders.map(order=>
                order.map(product=> 
                <tr key={product.id}>
                <td >{product.name}</td>
                <td>{product.price}</td>
                </tr>
                )
                    )
                }
            </tbody>
        </table>
        </section>
        <article id="payments">
        </article>
        </main>
    )
}

   

export default PrintOrders
