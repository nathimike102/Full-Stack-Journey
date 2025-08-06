function getGrid() {
    const data = document.querySelectorAll('input');
    const rows = data[0].value;
    const cols = data[1].value;
    const container = document.querySelector('#grid-container');

    // const newElement = document.createElement('h1');
    // newElement.setAttribute('class', 'head');
    // newElement.innerText = `Grid: ${row} x ${col}`;
    // body.appendChild(newElement);

    const existing = container.querySelector('table.grid-table');
    if (existing) {
        existing.remove();
    }

    const table = document.createElement('table');
    table.setAttribute('class', 'grid-table');
    table.setAttribute('style', 'border: 2px solid black; border-collapse: collapse; width: 50%; height: 100%;');
    let count = 1;
    for(let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        row.setAttribute('class', 'grid-row');
        for(let j = 0; j < cols; j++) {
            const cell = document.createElement('td');
            cell.setAttribute('class', 'cell');
            cell.setAttribute('style', 'border: 1px solid black; padding: 5px; margin: 5px; font-size: 20px; text-align: center;');
            cell.innerText = count++;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
}