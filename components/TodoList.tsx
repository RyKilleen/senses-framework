import { useEffect, useRef } from "react";

type CheckboxState = true | false | "partial";
type Todo = {
  label: string;
  value: CheckboxState;
};

const TODO_DATA: Todo[] = [
  { label: "Content for About / Credits to Lauren", value: "partial" },
  { label: "Confirm language for each sense's input", value: false },
  { label: "Produce accessible legend for fieldset", value: false },
  { label: "Move to public github?", value: true },
  { label: "Host static version for speed on netlify", value: "partial" },
  { label: "Clean up inline styles, code", value: false }
];

const ToDoList = () => {
  const partialToDos = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    console.log(partialToDos);
    if (partialToDos.current?.length > 0) {
      partialToDos.current.forEach((elem) => (elem.indeterminate = true));
    }
  }, [partialToDos]);
  const todos = TODO_DATA.map((todo, index) => (
    <li key={todo.label} style={{ paddingTop: "0.5rem" }}>
      <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <input
          ref={
            todo.value === "partial"
              ? (element) => {
                element && partialToDos.current?.push(element)
                }
              : undefined
          }
          type="checkbox"
          readOnly // preserve indeterminate state
          checked={typeof todo.value === "boolean" ? todo.value : false}
        />
        {todo.label}
      </label>
    </li>
  ));
  return (
    <section>
      <h2>Roadmap / to-do</h2>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          paddingLeft: "1rem"
        }}
      >
        {todos}
      </ul>
    </section>
  );
};

export default ToDoList;
