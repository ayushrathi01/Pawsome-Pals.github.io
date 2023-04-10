const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === "" || emailValue === "" || messageValue === "") {
    alert("Please fill in all fields.");
  } else {
    const formData = new FormData();
    formData.append("name", nameValue);
    formData.append("email", emailValue);
    formData.append("message", messageValue);

    fetch("process.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.text();
      })
      .then((data) => {
        alert("Thank you for your message!");
        name.value = "";
        email.value = "";
        message.value = "";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
