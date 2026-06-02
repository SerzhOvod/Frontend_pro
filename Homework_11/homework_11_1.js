const container = document.querySelector('.container');

const table = document.createElement('table');
const tableSize = 10;

const firstRow = document.createElement('tr');
const cornerSpot = document.createElement('th');

firstRow.appendChild(cornerSpot);
container.append(table);

for (let i = 1; i <= tableSize; i++) {
  const th = document.createElement('th');
  th.textContent = i;
  firstRow.appendChild(th);
}
table.appendChild(firstRow);

for (let row = 1; row <= tableSize; row++) {
  const tr = document.createElement('tr');

  const firstCol = document.createElement('th');
  firstCol.textContent = row;
  tr.appendChild(firstCol);

  for (let col = 1; col <= tableSize; col++) {
    const td = document.createElement('td');
    td.textContent = row * col;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
