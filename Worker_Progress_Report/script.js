const workerData = {
  sample: { workerName: "Madeleine Willson", claimNumber: "20042047", returnDate: "March 15, 2024", returnProgress: "Terrible. Testing Testing", otherInfo: "No info Testing Testing" },
  minimal: { workerName: "Jordan Lee", claimNumber: "20043102", returnDate: "April 8, 2024", returnProgress: "Improving with modified duties", otherInfo: "No additional information provided." }
};

function renderWorkerData(data) {
  document.querySelectorAll("[data-worker]").forEach(element => {
    if (element.matches("input, textarea")) {
      element.value = data[element.dataset.worker];
    } else {
      element.textContent = data[element.dataset.worker];
    }
  });
}

function updateReturnDateState() {
  const selectedOption = document.querySelector('input[name="missed"]:checked');
  const returnDate = document.querySelector("#return-date");
  returnDate.disabled = !selectedOption || selectedOption.value !== "returned";
}

function updateOtherWorkState() {
  const selectedStatus = document.querySelector('input[name="work-status"]:checked');
  const otherWorkInput = document.querySelector("#other-work-input");
  otherWorkInput.disabled = !selectedStatus || selectedStatus.value !== "other";
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.querySelector("#worker-demo");
  renderWorkerData(workerData[selector.value]);
  selector.addEventListener("change", () => renderWorkerData(workerData[selector.value]));
  // Keep the PDF-style single-choice groups mutually exclusive.
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener("change", () => {
      const group = radio.name;
      document.querySelectorAll(`input[type="radio"][name="${group}"]`).forEach(item => {
        if (item !== radio) item.checked = false;
      });
      if (group === "missed") updateReturnDateState();
      if (group === "work-status") updateOtherWorkState();
    });
  });
  updateReturnDateState();
  updateOtherWorkState();

  // Prevent accidental form navigation if this page is later embedded in a form.
  document.querySelectorAll("a[href='#']").forEach(a => {
    a.addEventListener("click", e => e.preventDefault());
  });
});
