import React, {useState, useEffect} from 'react';


const Summary = () => {

    const [summary, setSummary] = useState([])

    // const addOrder = () => {
    //     if (summary !== []) {
    //         const orderDetails = {
    //             ingredient: task,
    //             isEaten: false
    //         }
    //         setTaskList([...taskList, taskDetails])
    //         todoRef.push(taskDetails)
    //
    //         setTask("")
    //     }
    // }

    return (
        <div>
            <div className="card" style={{width: "800px", margin: "30px auto 0 auto", padding: "10px", backgroundColor: "#424242"}}>
            <h6 className="white-text">Order Summary</h6>
            </div>

            <div className="card" style={{width: "800px", margin: "0 auto 30px auto", padding: "10px"}}>
                <h6 className="teal-text">Pork sausage Burger</h6>
                <ul className="collection">
                    <li>Lettuce</li>
                    <li>Cheese</li>
                    <li>Tomato</li>
                </ul>
                <button className="btn-flat red-text">Clear</button>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Send Order
                <i className="material-icons right">send</i>
            </button>
        </div>
    );
};

export default Summary;
