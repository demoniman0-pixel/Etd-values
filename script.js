const units = [
  {
    name: "Gojo",
    value: "50,000",
    demand: "High",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Sukuna",
    value: "80,000",
    demand: "Overpriced",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Naruto",
    value: "15,000",
    demand: "Medium",
    image: "https://via.placeholder.com/150"
  }
];

const grid = document.getElementById("unitsGrid");
const searchInput = document.getElementById("searchInput");

function displayUnits(items) {
  grid.innerHTML = items.map(unit => `
    <div class="card">
      <img src="${unit.image}" alt="${unit.name}">
      <h3>${unit.name}</h3>
      <div class="info-row">
        <span>Value:</span>
        <span class="value">${unit.value}</span>
      </div>
      <div class="info-row">
        <span>Demand:</span>
        <span class="demand">${unit.demand}</span>
      </div>
    </div>
  `).join("");
}

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = units.filter(u => u.name.toLowerCase().includes(query));
  displayUnits(filtered);
});

displayUnits(units);
