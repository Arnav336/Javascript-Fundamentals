function sortTable() {
    let table = document.getElementById("myTable");
    let tbody = table.querySelector("tbody");
    let rows = Array.from(tbody.rows);

    rows.sort((rowA, rowB) => {
      let nameA = rowA.cells[0].textContent.toLowerCase();
      let nameB = rowB.cells[0].textContent.toLowerCase();
      return nameA.localeCompare(nameB);
    });

    // Re-append rows in sorted order
    for (let row of rows) {
      tbody.appendChild(row);
    }
  }
  sortTable()