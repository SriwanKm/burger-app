import React, {useState, useEffect} from 'react';
import './item.css';

const ingredient = ["Cheese", "Lettuce", "Fried-egg", "Tomato"]

function Item(props) {
    return (
        <div className="card" style={{width: "800px", margin: "30px auto", padding: "10px"}}>
            <button style={{margin: "5px"}} className="waves-effect btn-large amber darken-3">Pork Sausage</button>
            <button style={{margin: "5px"}} className="waves-effect btn-large amber darken-3">Fried-Fish</button>
            <button style={{margin: "5px"}} className="waves-effect btn-large amber darken-3">Grilled-Chicken</button>

            <div className="card-content">
                <div>{ingredient.map(ing => <span className="item-list">{ing}
                    <a style={{margin: "5px"}}
                       className="btn-floating btn-small waves-effect waves-light grey darken-3"><i
                        className="material-icons">add</i>
                    </a></span>)}
                </div>

                <div className="card">
                    <div style={{margin: "20px"}} className="input-field col s6">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                        <label htmlFor="icon_prefix2">Customize your burger</label>
                    </div>
                </div>
            </div>


        </div>
    );
}

const addBtnStyle =
    <a className="btn-floating btn-small waves-effect waves-light red"><i
        className="material-icons">add</i></a>

export default Item;