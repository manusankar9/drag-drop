import React, { useState } from "react";
import "./style.css";
import Item from './Item';
import Card from './Card';

export default () => {
  const [items, updateItems] = useState({
    tasks: [
      { name: "Mk-212 Mock Rocket Go Now", category: "todo" },
      { name: "Rediculus spines", category: "wip" },
      { name: "Align dish", category: "wip" },
      { name: "Draw new symentics", category: "complete" }
    ]
  });

  const onDragStart = (evt, id) => {
    evt.dataTransfer.setData("id", id);
  };

  const onDrop = (evt, category) => {
    const id = evt.dataTransfer.getData("id");

    const tasks = items.tasks.filter(task => {
      if (task.name == id) {
        task.category = category;
      }
      return task;
    });

    updateItems({
      ...items,
      tasks
    });
  };

  const tasks = {
    todo: [],
    wip: [],
    complete: []
  };

  items.tasks.forEach(item => {
    tasks[item.category].push(<Item dragHandler={onDragStart} name={item.name} />);
  });
  return (
    <>
      <header>
        <h1>Scrum I</h1>
      </header>
      <main>
        <section className="container">
          <Card type={"todo"} dropHandler={onDrop} data={tasks.todo} label={"TODO"} />
          <Card type={"wip"} dropHandler={onDrop} data={tasks.wip} label={"IN PROGRESS"}/>
          <Card type={"complete"} dropHandler={onDrop} data={tasks.complete} label={"COMPLETED"}/>
        </section>
      </main>
    </>
  );
};
