// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// Simple contact form handler (front-end only)
const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      if (contactStatus) {
        contactStatus.textContent = "Please fill in all fields before sending.";
        contactStatus.className = "form-status error";
      }
      return;
    }

    // For a static site, we only simulate success.
    contactForm.reset();
    if (contactStatus) {
      contactStatus.textContent =
        "Thank you for reaching out. Our team will get back to you shortly.";
      contactStatus.className = "form-status success";
    }
  });
}

// Update footer year
const yearSpan = document.querySelector("#year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}


