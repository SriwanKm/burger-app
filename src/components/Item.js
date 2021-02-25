import React, {useState, useEffect} from 'react';
import './item.css';

const ingredient = ["Cheese", "Lettuce", "Fried-egg", "Tomato"]
const meat = ["Pork Sausage", "Fried-Fish", "Grilled-Chicken"]

function Item(props) {
    const [active, setActive] = useState("")
    const [customize, setCustomize] = useState("");
    const handleChange = (e) => {
        setCustomize(e.target.value)
        // e.target.value = ""
    }

    const handleMeat = (e) => {
        setActive(e.target.value)
    }

    return (
        <div className="card" style={{width: "800px", margin: "30px auto", padding: "10px"}}>
            {meat.map(m =>
                <button onClick={(e) => handleMeat(e)} value={m} style={{margin: "5px"}}
                        className={active === m ? "waves-effect btn-large amber darken-4" : "waves-effect btn-large amber darken-1"}>{m}
                </button>)}


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
                        <textarea onChange={(e) => handleChange(e)} id="icon_prefix2"
                                  className="materialize-textarea"></textarea>
                        <label htmlFor="icon_prefix2">Customize your burger</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Add
                </button>
            </div>


        </div>
    );
}

const addBtnStyle =
    <a className="btn-floating btn-small waves-effect waves-light red"><i
        className="material-icons">add</i></a>

export default Item;