const expenseData = {
  sample: {
    workerName: "Madeleine Willson", claimNumber: "20042047",
    prescriptions: [["Naproxen", "February 28, 2024", "February 29, 2024", "Dr. Best", "$20.00"]],
    overCounter: [["Advil", "March 28, 2024", "$8.00", "Shoppers Drug Mart", "Pain"]],
    supplies: [["Tensor", "February 28, 2024", "Yes", "Dr. Best", "$10.00", "Shoppers DrugMart"]],
    parking: [["333 St Mary Ave, Winnipeg MB R3C4A5, Canada", "March 28, 2024", "$10.00", "yes", "12245"]],
    mileage: [["March 28, 2024", "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", "20 km"]],
    transport: [["March 28, 2024", "", "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada", "Bus", "$3.00"], ["March 27, 2024", "25 Furby St, Winnipeg MB R3C2A2, Canada", "440 Edmonton St, Winnipeg MB R3B 2M4, Canada", "Taxi", "$15.00"]]
  },
  expanded: {
    workerName: "Jordan Lee", claimNumber: "20043102",
    prescriptions: [["Naproxen", "February 28, 2024", "February 29, 2024", "Dr. Best", "$20.00"], ["Acetaminophen", "March 3, 2024", "March 4, 2024", "Dr. Singh", "$12.50"], ["Cyclobenzaprine", "March 7, 2024", "March 8, 2024", "Dr. Singh", "$18.75"]],
    overCounter: [["Advil", "March 28, 2024", "$8.00", "Shoppers Drug Mart", "Pain"], ["Ice pack", "April 2, 2024", "$6.50", "London Drugs", "Swelling"]],
    supplies: [["Tensor", "February 28, 2024", "Yes", "Dr. Best", "$10.00", "Shoppers DrugMart"], ["Wrist brace", "March 9, 2024", "No", "", "$24.99", "Prairie Pharmacy"]],
    parking: [["333 St Mary Ave, Winnipeg MB R3C4A5, Canada", "March 28, 2024", "$10.00", "yes", "12245"], ["820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", "April 2, 2024", "$8.00", "no", ""]],
    mileage: [["March 28, 2024", "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada", "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", "20 km"], ["April 2, 2024", "Concordia Hospital, 1090 Concordia Rd, Winnipeg MB", "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada", "32 km"]],
    transport: [["March 28, 2024", "", "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada", "Bus", "$3.00"], ["March 27, 2024", "25 Furby St, Winnipeg MB R3C2A2, Canada", "440 Edmonton St, Winnipeg MB R3B 2M4, Canada", "Taxi", "$15.00"], ["April 2, 2024", "12 Main St, Winnipeg MB", "Concordia Hospital, 1090 Concordia Rd, Winnipeg MB", "Bus", "$4.00"]]
  }
};

function renderRows(id, rows) {
  document.querySelector(`#${id}`).innerHTML = rows.map(row => `<tr>${row.map(cell => `<td class="blue" contenteditable="true" spellcheck="false">${cell}</td>`).join("")}</tr>`).join("");
}

function renderExpenseData(data) {
  document.querySelectorAll("[data-expense]").forEach(element => {
    element.textContent = data[element.dataset.expense];
  });
  renderRows("prescription-rows", data.prescriptions);
  renderRows("over-counter-rows", data.overCounter);
  renderRows("supply-rows", data.supplies);
  renderRows("parking-rows", data.parking);
  renderRows("mileage-rows", data.mileage);
  renderRows("transport-rows", data.transport);
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.querySelector("#expense-demo");
  renderExpenseData(expenseData[selector.value]);
  selector.addEventListener("change", () => renderExpenseData(expenseData[selector.value]));
  document.querySelectorAll('input[type="checkbox"]').forEach(box => {
    box.addEventListener("change", () => {
      // The supplied PDF uses check marks as confirmations.
      // This keeps them interactive without changing the document layout.
    });
  });

  document.querySelectorAll("a[href='#']").forEach(a => {
    a.addEventListener("click", e => e.preventDefault());
  });
});
