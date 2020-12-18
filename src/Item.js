import React from "react";

export default ({ dragHandler, name }) => (
  <div onDragStart={e => dragHandler(e, name)} draggable className="task-item">
    <p>{name}</p>
  </div>
);
