document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const animateBtn = document.getElementById("animateBtn");

  
  const savedName = localStorage.getItem("userName");
  const savedEmail = localStorage.getItem("userEmail");

  if (savedName) usernameInput.value = savedName;
  if (savedEmail) emailInput.value = savedEmail;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = usernameInput.value.trim();
    const email = emailInput.value.trim();

    if (name && email) {
      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);

      alert("Your info has been saved!");
    }
  });

  animateBtn.addEventListener("click", () => {
    animateBtn.classList.add("animate-pop");

    setTimeout(() => {
      animateBtn.classList.remove("animate-pop");
    }, 500);

    const name = localStorage.getItem("userName") || "Not provided";
    const email = localStorage.getItem("userEmail") || "Not provided";

    alert(`Saved User Info:\n\nName: ${name}\nEmail: ${email}`);
  });
});