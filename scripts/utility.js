function grandTotals(elemint, count) {
  const grandTotal = document.getElementById(elemint);
  const total = 550 * count;
  return total;
}
function newZone() {
  const total = grandTotals("grandTotal", count);
  const totals = total - total * 0.15;
  return totals;
}
function coupleZone() {
  const total = grandTotals("grandTotal", count);
  const totals = total - total * 0.2;
  return totals;
}

document.getElementById("continue").addEventListener("click", function () {
  const grandTotal = document.getElementById("grandTotal");
  grandTotal.innerText = "0,000";
  const totalPrice = document.getElementById("total-price");
  totalPrice.innerText = "0,000";
  const allselectSites = document.getElementById("all-selectSites");
  allselectSites.innerText = "";
});