const topMenuChart = document.querySelector(".top-menu-chart");
const topMenuReference = document.querySelector(".top-menu-reference");

topMenuChart.addEventListener("click", () => {
  topMenuChart.classList.add("on-click");
  topMenuReference.classList.remove("on-click");
});
topMenuReference.addEventListener("click", () => {
  topMenuReference.classList.add("on-click");
  topMenuChart.classList.remove("on-click");
});
