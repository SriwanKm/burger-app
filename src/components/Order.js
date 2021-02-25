import React, {useState, useEffect} from 'react';


function Order(props) {
    return (

            <ul>
                <li>
                    <div className="card" style={{width: "800px", margin: "0 auto 30px auto", padding: "10px"}}>
                        <h6 className="teal-text">Pork sausage Burger</h6>
                        <ul className="collection">
                            <li>Lettuce</li>
                            <li>Cheese</li>
                            <li>Tomato</li>
                        </ul>
                        <button style={{margin: "2px"}} className="btn waves-effect waves-light" type="submit" name="action">Completed
                            <i className="material-icons left">done</i>
                        </button>
                        <button style={{margin: "2px"}} className="btn waves-effect waves-light red darken-2" type="submit" name="action">Delete
                            <i className="material-icons left">delete</i>
                        </button>
                    </div>
                </li>
            </ul>


    );
}

export default Order;