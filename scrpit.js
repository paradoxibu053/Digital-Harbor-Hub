const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.getElementById("close-btn");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebar.style.left = sidebar.classList.contains("open") ? "0" : "-250px";
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
  sidebar.style.left = "-250px";
});
document
  .getElementById("connect-wallet")
  .addEventListener("click", function () {
    document.getElementById("wallet-modal").style.display = "flex";
  });

document
  .getElementById("close-wallet-modal")
  .addEventListener("click", function () {
    document.getElementById("wallet-modal").style.display = "none";
  });
