import React, { useState } from 'react';
import './Style.css';



const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const addItems = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData]);
            setInputData("");
        }
    }
    const deleteItem = (id) =>{
        const updateItems=items.filter((ele,ind)=>{
            return ind !== id;
        })
        setItems(updateItems);
    }

    const removeAll = () =>{
        setItems([]);
    }

    return (
        <div>
            {/* <h1>TODO CURD Application !</h1> */}
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src='./images/NewTodoImg.jpg' alr="todoimg"></img>
                        <figcaption>Add Your List Here !</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input value={inputData} onChange={(e) => setInputData(e.target.value)} type='text' placeholder='Add Items...'></input>
                        <i className="fa fa-plus add-btn" onClick={addItems} title='Add Items'></i>
                    </div>
                    <div className='showItems'>
                        {
                            items.map((ele, ind) => {
                                return (
                                    <div className='eachItem' key={ind}>
                                        <h3>{ele}</h3>
                                        <i className="fas fa-trash-alt add-btn"  onClick={()=>deleteItem(ind)} title='Delete Items'></i>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className='showItems'>
                        <button className='btn effect04' style={{background:"white"}}  onClick={removeAll}> <span> Remove All</span></button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo