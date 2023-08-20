document.addEventListener('DOMContentLoaded', () => {
    // Get all the filter input elements
    const filters = document.querySelectorAll('.filter');

    // Add an event listener to each filter input
    filters.forEach(filter => {
      filter.addEventListener('input', (e) => {
        const column = e.target.dataset.column; // Get the column number from data-column attribute
        const value = e.target.value.toLowerCase(); // Get the value from the input

        // Get all the table rows
        const rows = document.querySelectorAll('tbody tr');

        // Show or hide rows based on the filter value
        rows.forEach(row => {
          const cell = row.cells[column].innerText.toLowerCase(); // Get the text from the cell in the filtered column
          if (cell.includes(value)) {
            row.style.display = ''; // Show row if the cell text includes the filter value
          } else {
            row.style.display = 'none'; // Hide row if the cell text does not include the filter value
          }
        });
      });
    });
  });
