import React from 'react';

const Cell = ({ id, cell }) => {
  return (
    <div className="square" id={id}>{cell}</div>
  );
}

export default Cell;
