// Theme Toggle
const themeToggle = document.getElementById("themeToggle")
const body = document.body

const savedTheme = localStorage.getItem("theme")
if (savedTheme === "dark") {
  body.classList.add("dark-mode")
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode")
  const isDarkMode = body.classList.contains("dark-mode")
  localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>'
})

// Sidebar Toggle
const toggleBtn = document.getElementById("toggleBtn")
const sidebar = document.querySelector(".sidebar")
const mainContent = document.querySelector(".main-content")

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed")
  mainContent.classList.toggle("sidebar-collapsed")
})

// Active Navigation
const navItems = document.querySelectorAll(".nav-item")
navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault()
    navItems.forEach((nav) => nav.classList.remove("active"))
    item.classList.add("active")
  })
})

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) target.scrollIntoView({ behavior: "smooth" })
  })
})
