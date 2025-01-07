document
  .getElementById("contact-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      document.getElementById("form-message").textContent =
        result.message || result.error;
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("form-message").textContent =
        "An error occurred. Please try again.";
    }
  });
