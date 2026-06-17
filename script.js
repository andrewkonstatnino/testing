document.querySelector(".contact-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector("button");
  const status = form.querySelector(".form-status");
  const payload = Object.fromEntries(new FormData(form).entries());

  button.disabled = true;
  button.textContent = "Sending...";
  status.textContent = "";

  const subject = encodeURIComponent(`Consultation request from ${payload.name}`);
  const body = encodeURIComponent(
    [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company || "Not provided"}`,
      `Phone: ${payload.phone || "Not provided"}`,
      "",
      "Project details:",
      payload.message,
    ].join("\n"),
  );

  window.location.href = `mailto:sales@herculeantechnologies.com?subject=${subject}&body=${body}`;
  status.textContent = "Your email app is opening with the request addressed to our sales team.";
  button.disabled = false;
  button.textContent = "Request a consultation";
});
