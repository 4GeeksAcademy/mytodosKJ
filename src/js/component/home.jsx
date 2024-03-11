import React, { useState } from "react";

// (Optional) You can remove this line if not using the image
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  // Define state variables
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = (event) => {
    if (event.keyCode === 13 && inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (todoIndex) => {
    const filteredTodos = todos.filter((todo, index) => index !== todoIndex);
    setTodos(filteredTodos);
  };

  return (
    <div className="container">
      <h1>My Todos</h1>
      <ul>
        <li>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={addTodo}
            placeholder="What do you need to do?"
          />
        </li>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
