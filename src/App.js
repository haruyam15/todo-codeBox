import "./styles.css";
import { useState } from "react";
/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const addCities = () => {
    //Complete function
    if (text.trim().length === 0) {
      alert("입력 해라");
      return;
    }
    const id = Math.random();
    setTodo((prev) => [...prev, { id, text }]);
    setText("");
  };
  const del = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addCities}>추가</button>

      <ul>
        {todo.length > 0 &&
          todo.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => del(item.id)}>삭제</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
