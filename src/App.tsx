import React, { useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import { Todo } from "./model";
import { TodoList } from "./components/TodoList";

// function App() {
//   return <div>Hello world</div>;
// }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>

      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={(e) => handleAdd(e)}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;
