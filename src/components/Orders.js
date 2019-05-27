import React from 'react';



const PrintOrders = ({orders}) => {
    return(
    <section className= "history">
        {orders.map(element =>{
            return(
                <article>
                    <p>{`Cliente: ${element.clientName}`}</p>
                    <table>
                        <tbody>
                            {element.orders.map(product=>{
                                return(
                                    <tr key= {product.id}>
                                        <td>{product.name}</td>
                                        <td>{`$ ${product.price}`}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <p>{`Total: $ ${element.total}`}</p>
                    <hr></hr>
                </article>
                )
        })}
    </section>
    )
    
    
}

   

export default PrintOrders
