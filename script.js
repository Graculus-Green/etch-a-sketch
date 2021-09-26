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


makeGrid(16,16);

document.querySelectorAll('.column').forEach(pixel => pixel.addEventListener('mouseover', (e) => {
    e.target.style.background = 'blue';
}));

