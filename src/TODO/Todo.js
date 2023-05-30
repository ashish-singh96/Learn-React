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
                                    <div className='eachItem'>
                                        <h3>{ele}</h3>
                                        <i className="fas fa-trash-alt add-btn" title='Delete Items'></i>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text='Remove All'> <span>Check List</span></button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo