import React, { useState } from "react";
import "./styles.css";
import InputTodo from "./components/InputTodo";
import { UncompleteTodos } from "./components/UncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [uncompleteTodos, setUncompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...uncompleteTodos, todoText];
    setUncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...uncompleteTodos];
    newTodos.splice(index, 1); // 渡された要素から指定個数を削除
    setUncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newUnCompleteTodos = [...uncompleteTodos];
    newUnCompleteTodos.splice(index, 1); // 渡された要素から指定個数を削除
    const newCompleteTodos = [...completeTodos, uncompleteTodos[index]];

    setUncompleteTodos(newUnCompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newUncompleteTodos = [...uncompleteTodos, newCompleteTodos[index]];

    setcompleteTodos(newCompleteTodos);
    setUncompleteTodos(newUncompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <UncompleteTodos
        todos={uncompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
