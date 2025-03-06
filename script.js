function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToSection(sectionId) {
  document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll(".achievements-box").forEach((box, index) => {
  let direction = index % 2 === 0 ? 1 : -1; // Alternate direction for each box
  let position = 0;
  
  function moveBox() {
      if (!box.dataset.hover) { // Move only if not hovered
          position += direction * 2; // Move speed
          if (position > 100 || position < -100) direction *= -1; // Reverse direction at limits
          box.style.transform = `translateX(${position}px)`;
      }
  }

  let interval = setInterval(moveBox, 50); // Move continuously

  box.addEventListener("mouseover", () => {
      box.dataset.hover = "true"; // Stop moving on hover
  });

  box.addEventListener("mouseout", () => {
      delete box.dataset.hover; // Resume moving after hover
  });
});

const roles = ["Student", "&", "<b>Graduate Intern at PSIOG DIGITAL</b>"];
let index = 0;

function changeRole() {
  const roleElement = document.querySelector(".section__text__p2");
  roleElement.classList.add("fade-out");

  setTimeout(() => {
    index = (index + 1) % roles.length;
    roleElement.innerHTML = roles[index];
    roleElement.classList.remove("fade-out");
    roleElement.classList.add("fade-in");
  }, 500);
}

setInterval(changeRole, 3000);

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Explicitly set light mode as the default on first load
const savedTheme = localStorage.getItem("theme");

// If there's a saved theme, apply it; otherwise, default to light mode
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️"; // Sun icon for light mode
} else {
  body.classList.remove("dark-mode"); // Explicitly ensure light mode
  themeToggle.textContent = "🌙"; // Moon icon for dark mode
  localStorage.setItem("theme", "light"); // Save the default light mode
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️"; // Sun icon for light mode
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙"; // Moon icon for dark mode
  }
});