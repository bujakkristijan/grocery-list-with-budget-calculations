import React, { useEffect } from 'react';
import { useState } from 'react';
import DataService from '../../services/DataService';
import './ListComponent.css';

const ListComponent = (props) => {

    const groceryList = props.groceryList;
    // const setGroceryList = props.setGroceryList;

const getAllItemsFromLocalStorage = () =>{
    const items = JSON.parse(localStorage.getItem('items')) || [];
    return items;
}

// const getAllItemsFromJsonFile = () =>{
//     DataService.loadFruitsFromFile().then(data =>{
//         console.log(data)
//         setAllItems(data);
//     }).catch((error) =>{
//         console.error("Error getting data", error);
//     });
// }

  return (
    <div className='list-main-container'>
        <div className='list-container'>
            <h2 className='fruits-title'>Fruits</h2>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        groceryList.map(item =>{
                            return ( // mora return ako se stavljaju viticaste zagrade
                            <tr className='table-content-row' key={item.id}>
                                <td className='table-content-column'>{item.id}</td>
                                <td className='table-content-column'>{item.name}</td>
                                <td className='table-content-column'>{item.price}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListComponent