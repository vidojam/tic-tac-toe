import React from 'react';

const Cell = ({ id, cell, go, setGo, cells, setCells, winningMessage }) => {
    const handleClick = (e) => {
        if (!winningMessage) {
            const taken =
                e.target.firstChild?.classList.contains("circle") ||
                e.target.firstChild?.classList.contains("cross") ||
                e.target.classList.contains("circle") ||
                e.target.classList.contains("cross");

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
        }
    };

    const handleCellChange = (className) => {
        const nextCells = cells.map((cellItem, index) => {
            if (index === id) {
                return className;
            } else {
                return cellItem;
            }
        });
        setCells(nextCells);
    };

    console.log(cells);

    return (
        <div className="square" id={id} onClick={handleClick}>
            <div className={cell}></div>
        </div>
    );
};

export default Cell;
