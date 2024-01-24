import './App.css'
import Title from './components/Title'
import Item from './components/Item'
import Add from './components/Add'
import { useState } from 'react'
import Popup from './components/Popup'

function App() {
  const [items, setItems] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const addItem = newItem => {
    setItems(prevItems => [...prevItems, newItem])
    showPopup(`Task: ${newItem} added.`);
  };
  
  const removeItem = (index => {
    const deletedItem = items[index];
    setItems(prevItems => {
      const updatedItems = [...prevItems]
      updatedItems.splice(index, 1)
      showPopup(`Task: ${deletedItem} deleted.`);
      return(updatedItems)
    })
  })

  const completeItem = (index => {
    const completedItem = items[index];
    setItems(prevItems => {
      const updatedItems = [...prevItems]
      updatedItems.splice(index, 1)
      showPopup(`Task: ${completedItem} completed.`);
      return(updatedItems)
    })
  })

  const updateItem = (index, updatedItem) => {
    const originalItem = items[index];
    setItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index] = updatedItem
      showPopup(`Task: ${originalItem} updated to ${updatedItem}.`)
      return updatedItems;
    })
  }

  const showPopup = (message) => {
    setPopupMessage(message);
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 2500);
  }

  const map = items.map((item, index) => (
    <Item 
      key={index} 
      item={item} 
      onDelete = {() => removeItem(index) }
      onComplete = {() => completeItem(index)}
      onUpdate={(updatedItem) => updateItem(index, updatedItem)}  
    />
  ))

  return (
    <div className='app'>
      <Title />
      <div className="container">
        <Add addItem={addItem}/>
        {map}
      </div>
      <Popup action={popupMessage} isPopupVisible={isPopupVisible} />
    </div>
  )
}

export default App
