import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./My Components/Header";
import { Todos } from "./My Components/Todos";
import { Footer } from "./My Components/Footer";
import { AddTodos } from "./My Components/AddTodos";
import { About } from './My Components/About';
import './App.css';
import './cus.css';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos");
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      done: false
    }
    setTodos([...todos, myTodo]);
    console.log("Todo added successfully", myTodo);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const toggleDone = (todo) => {
    setTodos(todos.map((t) => {
      if (t.sno === todo.sno) {
        return { ...t, done: !t.done };
      }
      return t;
    }));
  }

    return (
            <Router>
        <div className="app-container" style={{ paddingBottom: "4rem" }}>
                <Header title="My Todos List" searchBar={false} />
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <AddTodos addTodo={addTodo} />
                            <Todos todos={todos} onDelete={onDelete} onToggle={toggleDone} />
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;