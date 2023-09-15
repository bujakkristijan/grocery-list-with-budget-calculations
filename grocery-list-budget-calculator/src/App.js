import './App.css';
import { useEffect, useState } from 'react';
import InputComponent from './components/input-container/InputComponent';
import ListComponent from './components/list-container/ListComponent';

function App() {

  const [allItems, setAllItems] = useState([]);

  const initialData = [
    {
      id: 1,
      name: 'banana',
      price: '100',
    },
    {
      id: 2,
      name: 'apple',
      price: '20',
    },
    {
      id: 3,
      name: 'watermelon',
      price: '40',
    },
    {
      id: 4,
      name: 'pineapple',
      price: '65',
    },
];

useEffect(() => {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem('items')) || [];

  if (!itemsFromLocalStorage.length) {
    localStorage.setItem('items', JSON.stringify(initialData));
    setAllItems(initialData);
  } else {
    setAllItems(itemsFromLocalStorage);
  }
}, []);


const addItemToList = (item) =>{
  setAllItems([...allItems, item]);
}


 

  return (
    <div className="App">
      <InputComponent add = {addItemToList}/>
      <ListComponent groceryList = {allItems} setGroceryList = {setAllItems}/>
    </div>
  );
}

export default App;
