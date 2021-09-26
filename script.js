function makeGrid(rows, columns) {
    for (let i = 0; i < rows;i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < columns; j++ ) {
            let column = document.createElement('div');
            column.className = 'column';
            column.id = 'grid';
            row.appendChild(column);
        }
        document.querySelector('.grid-container').appendChild(row);
    };
};

function etchSketch() {
    document.querySelectorAll('.column').forEach(pixel => pixel.addEventListener('mouseover', (e) => {
        e.target.style.background = 'blue';
    }));
};
document.querySelector('.btn').addEventListener('click', () => {
    let newSize = window.prompt('How large do you want the next grid to be? ');
    if (newSize > 100) {
        newSize = window.prompt("That's too large, keep it under 100. How large do you want the next grid to be? ");
    }
    document.querySelector('.grid-container').innerHTML = "";
    makeGrid(newSize,newSize);
    etchSketch();
});

