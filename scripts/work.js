function goto() {
  const section = document.getElementById("bus-contact");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
let count = 0;
const sites = document.getElementsByClassName("seat");
for (const seat of sites) {
  const btn = seat.addEventListener("click", function () {
    count = count + 1;
    if (count > 4) {
      alert(" select another seat");
      return;
    } else {
      seat.style.backgroundColor = "#1DD100";
      const addSeatCount = (document.getElementById("tikit-count").innerText =
        count);
      const curentSeat = (document.getElementById("present-sites").innerText =
        40 - count);
      const totalPrice = (document.getElementById("total-price").innerText =
        550 * count);
      const grandTotal = document.getElementById("grandTotal");
      grandTotal.innerText = grandTotals("grandTotal", count);

      const allselectSites = document.getElementById("all-selectSites");
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerText = seat.innerText;
      const p1 = document.createElement("p");
      p1.innerText = "Economoy";
      const p2 = document.createElement("p");
      p2.innerText = "550";

      li.appendChild(p);
      li.appendChild(p1);
      li.appendChild(p2);
      allselectSites.appendChild(li);

      const cupon_but = document.getElementById("cupon");
      const disablbtn = document.getElementById("getvalue");
      if ((totalPrice) => 550) {
        cupon_but.removeAttribute("disabled");
        disablbtn.removeAttribute("disabled");
      }

      document.getElementById("cupon").addEventListener("click", function () {
        const cuopn = document.getElementById("cupon_code");
        const cuponDiv = document.getElementById("cuponDiv");
        const cuponValue = cuopn.value;
        if (cuponValue === "NEWZone") {
          const cup = newZone();
          grandTotal.innerText = cup;
          cuponDiv.classList.add("hidden");
        } else if (cuponValue === "Couple 20") {
          const cups = coupleZone();
          grandTotal.innerText = cups;
          cuponDiv.classList.add("hidden");
        }
      });
    }
  });
}