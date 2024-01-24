import { useState } from "react"

export default function Add({addItem}) {
  const [val, setVal] = useState("")

  const handleInput = (event) => {
    setVal(event.target.value)
    console.log(val)
  }

  const handleAdd = () => {
    if (val.trim() !== '') {
      addItem(val)
      setVal('')
      console.log('added')
    }

  }

    return (
      <div className="a--container">
          <h2 className="a--title">Add Item</h2>
          <div className="a--bar">
            <input 
              type="text" 
              placeholder="Add item..." 
              onChange={handleInput} 
              value={val}
              className="a--input"
            />
            <button className="a--button" onClick={handleAdd}>
              <b>
               Add 
              </b>
            </button>
          </div>
      </div>
    )
}