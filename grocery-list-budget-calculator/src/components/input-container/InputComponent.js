import React, { useState } from 'react'

const InputComponent = (props) => {

const add = props.add;

const [name, setName] = useState("");
const [price, setPrice] = useState(1);
const [id, setId] = useState(0);

const submitItem = (e) =>{
    // const item = {name, price};

    e.preventDefault();
        const item = {name, price};
        if(item.name === "" || item.price<1){
            alert("Eror! Please insert valid values!");
        }
        else{
            add(item);
            alert("Item successfully added!")
            setName("");
            setPrice(1);
        }    
}

  return (
    <div className='input-container'>
        <div className='name-container'>
            <label>Name: </label>
            <input className='input-name'
                    type='text' placeholder='Insert fruit name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
            </input>
        </div>
        <div className='price-container'>
            <label>Price: </label>
            <input className='input-price'
                    type='number'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}>
            </input>
        </div>
        <button className='btn-submit' onClick={submitItem}>Add item</button>
    </div>
  )
}

export default InputComponent