document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    fetch("/.netlify/functions/subscribe", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("message").innerHTML = data.message;
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("message").innerHTML =
          "An error occurred. Please try again.";
      });
  });
