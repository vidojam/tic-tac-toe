import React from 'react';

const Cell = ({ id, cell, go, setGo, cells, setCells }) => {
    const handleClick = (e) => {
        const taken = e.target.firstChild.classList.contains("circle") || 
                      e.target.firstChild.classList.contains("cross");

        if (!taken) {
            if (go === "circle") {
                e.target.firstChild.classList.add("circle");
                handleCellChange("circle");
                setGo("cross");
            } else if (go === "cross") {
                e.target.firstChild.classList.add("cross");
                handleCellChange("cross");
                setGo("circle");
            }
        }
    };

    const handleCellChange = (className) => {

        const nextCells = cells.Map((cell, index) => {
            if (cell === "") {
                cell = className;
            } else {
                return cell;
            }
        });
        setCells(nextCells);
    }

    console.log(cells);

    return (
        <div className="square" id={id} onClick={handleClick}>
            <div classname={cell}></div>
        </div>
    );
}

export default Cell;

