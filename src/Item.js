import React, { memo } from "react";

export default memo(({ dragHandler, name }) => (
  <div onDragStart={e => dragHandler(e, name)} draggable className="task-item">
    <p>{name}</p>
  </div>
));
