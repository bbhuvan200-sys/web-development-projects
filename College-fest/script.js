function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function highlightEvent(eventName) {
  document.getElementById("highlight-text").innerText =
    "🔥 Highlighted Event: " + eventName + " is trending!";
}

function submitForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let eventName = document.getElementById("eventName").value;
  let budget = document.getElementById("budget").value;
  let ticket = document.getElementById("ticket").value;

  if (!name || !email || !eventName || !budget || !ticket) {
    alert("Please fill all required fields!");
    return;
  }

  document.getElementById("form-status").innerText =
    "✅ Proposal submitted successfully! Fest team will contact you.";
}
