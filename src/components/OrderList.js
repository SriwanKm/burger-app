import React, {useState, useEffect} from 'react';
import Order from "./Order";

const OrderList = () => {
    return (
        <div>

                <div className="card"
                     style={{width: "800px", margin: "30px auto 0 auto", padding: "10px", backgroundColor: "#424242"}}>
                    <h6 className="white-text">Order List</h6>
                </div>
            <Order/>
            <Order/>


        </div>
    );
};

export default OrderList;
