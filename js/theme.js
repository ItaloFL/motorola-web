const btnTheme = document.getElementById("btn-theme");
const html = document.documentElement;

const theme = localStorage.getItem("motorola-theme")

if (theme) {
  html.setAttribute("data-theme", theme)
}

btnTheme.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const newTheme = current === "light" ? "dark" : "light"
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("motorola-theme", newTheme)
});