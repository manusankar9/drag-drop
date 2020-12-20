import React,{ memo } from "react";
import NoItems from './NoItems';

export default memo(({ type, dropHandler, data, label }) => (
  <div
    className="bg-card"
    onDragOver={e => e.preventDefault()}
    onDrop={e => {
      dropHandler(e, type);
    }}
  >
    <h5 className="task-header">{label}</h5>
    {data.length ? data : <NoItems />}
  </div>
));
