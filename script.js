function makeGrid(rows, columns) {
    for (let i = 0; i < rows;i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.id = 'grid';
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

document.querySelector('.column').addEventListener('mouseover', () => {
    document.querySelector('.column').style.backgroundColor = 'red';  
});



