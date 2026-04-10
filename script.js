const phoneNumber = "0708 291 276";

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const copyButton = document.getElementById("copyPhone");
const statusEl = document.getElementById("copyStatus");

if (copyButton && statusEl) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      statusEl.textContent = "Phone number copied.";
    } catch (error) {
      statusEl.textContent = "Could not copy automatically. Please copy manually.";
    }
  });
}

