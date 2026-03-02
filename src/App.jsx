import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([
    
  ]);
  const [inputValue, setInputValue] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setItems([...items, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  return (
    <div className="App">
      <form onSubmit={addItem}>
        <h1>To-Do List</h1>
        <input type="text" name="item" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <div>
        {items.map((item, index) => (
          <div id="displayItems" key={index}>
            <input type="checkbox" className="checkbox" checked={item.completed} onChange={() => toggleComplete(index)} />
            <li className={item.completed ? "completed" : ""}>{item.text}</li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;