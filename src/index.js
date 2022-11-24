const toggle = document.querySelector("#NavToggle");
const nav = document.querySelector("#MainNav");
const dropdowns = [...document.querySelectorAll(".dropdown")];

toggle.addEventListener("click", () => nav?.classList.toggle("hidden"));

[...document.querySelectorAll(".dropdown-toggle")].forEach((dt) => {
  dt.addEventListener("click", () => {
    const dropdownOpen =
      dt.parentElement?.getAttribute("data-dropdown-open") === "true";

    dropdowns.forEach((dd) => dd.setAttribute("data-dropdown-open", "false"));

    if (dropdownOpen) {
      dt.parentElement?.setAttribute("data-dropdown-open", "false");
    } else {
      dt.parentElement?.setAttribute("data-dropdown-open", "true");
    }
  });
});
