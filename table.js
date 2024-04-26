
let currentPage = 0;
const rowsPerPage = 10;
const totalRows = document.querySelector("table tbody").rows.length;

function showPage(page) {
  const rows = document.querySelectorAll("table tbody tr");
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  rows.forEach((row, index) => {
    if (index >= startIndex && index < endIndex) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
}

function nextPage() {
  if (currentPage < Math.ceil(totalRows / rowsPerPage) - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

showPage(currentPage);