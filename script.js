const units = [
  // --- Скриншот 1: Нижний ряд (Mythic) ---
  { name: "Banker", value: "130,000", demand: 8, trend: "stable", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Banker" },
  { name: "Star Searcher", value: "150,000", demand: 10, trend: "fluctuating", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Star+Searcher" },
  { name: "Swimmer", value: "80,000", demand: 5, trend: "stable", rarity: "Mythic", image: "https://i.ibb.co/1tfxH0R8/IMG-20260904-225705.jpg" },
  { name: "Mermaid", value: "100,000", demand: 7, trend: "slow dropping", rarity: "Mythic", image: "https://i.ibb.co/HDnjFqr3/IMG-20260904-225609.jpg" },
  { name: "Seashell", value: "95,000", demand: 6, trend: "stable", rarity: "Mythic", image: "https://i.ibb.co/rffVFc4g/IMG-20260904-225805.jpg" },

  // --- Скриншот 1: Средний ряд (Mythic) ---
  { name: "Soul Reaper", value: "200,000", demand: 10, trend: "rising", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Soul+Reaper" },
  { name: "Electrician", value: "120,000", demand: 9, trend: "slow rising", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Electrician" },
  { name: "Alchemist", value: "120,000", demand: 9, trend: "fluctuating", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Alchemist" },
  { name: "White Ninja", value: "110,000+", demand: 7, trend: "rising", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=White+Ninja" },
  { name: "Diamond White", value: "130,000+", demand: 9, trend: "rising", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Diamond+White" },
  { name: "Snake", value: "80,000", demand: 5, trend: "slowly dropping", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Snake" },

  // --- Скриншот 1: Верхний ряд (Mythic) ---
  { name: "Shinobi", value: "60,000", demand: 7, trend: "stable", rarity: "Mythic", image: "https://i.ibb.co/G3dsk01M/IMG-20260905-000813.jpg" },
  { name: "Yeti", value: "45,000", demand: 2, trend: "dropping", rarity: "Mythic", image: "https://i.ibb.co/4wpf6mqq/IMG-20260905-000705.jpg" },
  { name: "Builder", value: "50,000", demand: 5, trend: "stable", rarity: "Mythic", image: "https://i.ibb.co/tpxcDGhr/IMG-20260905-000411.jpg" },
  { name: "Goblin Wizard", value: "45,000", demand: 2, trend: "dropping", rarity: "Mythic", image: "https://i.ibb.co/YT8ks3kG/IMG-20260905-000445.jpg" },
  { name: "Dark Jonin", value: "60,000", demand: 8, trend: "stable", rarity: "Mythic", image: "https://i.ibb.co/1tFj8ZSJ/IMG-20260905-000512.jpg" },
  { name: "Ghost Pirate", value: "50,000", demand: 4, trend: "stable", rarity: "Mythic", image: "https://i.ibb.co/mCqRz8Cx/IMG-20260905-000623.jpg" },

  // --- Скриншот 2: Нижний ряд (Legendary & Mythic) ---
  { name: "Groll", value: "1,000", demand: 1, trend: "dropping", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Groll" },
  { name: "Sniper King", value: "25,000", demand: 2, trend: "stable", rarity: "Mythic", image: "https://i.ibb.co/W45rST2n/IMG-20260905-000604.jpg" },
  { name: "Range Bean", value: "40,000", demand: 7, trend: "rising", rarity: "Mythic", image: "https://i.ibb.co/PZWYG7KF/IMG-20260905-000540.jpg" },
  { name: "Excalibur", value: "40,000", demand: 10, trend: "rising", rarity: "Mythic", image: "https://i.ibb.co/4ggyN51R/IMG-20260905-000319.jpg" },
  { name: "Sunflower", value: "25,000", demand: 5, trend: "stable", rarity: "Mythic", image: "https://i.ibb.co/R42VdrSz/IMG-20260905-000350.jpg" },
  { name: "Minigunner", value: "30,000", demand: 3, trend: "stable", rarity: "Mythic", image: "https://i.ibb.co/kskdW21n/IMG-20260905-000639.jpg" },

  // --- Скриншот 2: Средний ряд (Legendary) ---
  { name: "Arcane Mage", value: "2,000", demand: 2, trend: "dropping", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Arcane+Mage" },
  { name: "Red Dragon", value: "1,500", demand: 4, trend: "fluctuating", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Red+Dragon" },
  { name: "Car Mechanic", value: "1,000", demand: 2, trend: "dropping", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Car+Mechanic" },
  { name: "Frost Mage", value: "1,000", demand: 3, trend: "stable", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Frost+Mage" },
  { name: "Electric Fence", value: "3,500", demand: 2, trend: "dropping", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Electric+Fence" },
  { name: "Electric Shroom", value: "1,500", demand: 2, trend: "dropping", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Electric+Shroom" },

  // --- Скриншот 2: Верхний ряд (Legendary) ---
  { name: "BeeHive", value: "1,000", demand: 1, trend: "dropping", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=BeeHive" },
  { name: "Mushroom", value: "2,500", demand: 3, trend: "stable", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Mushroom" }
];

const grid = document.getElementById("unitsGrid");
const searchInput = document.getElementById("searchInput");

// Функция для подбора стиля и иконки тренда
function getTrendInfo(trend) {
  switch ((trend || "").toLowerCase()) {
    case "rising":
      return { text: "Rising 📈", color: "#22c55e" }; // Зелёный
    case "dropping":
      return { text: "Dropping 📉", color: "#ef4444" }; // Красный
    case "fluctuating":
      return { text: "Fluctuating 🔄", color: "#eab308" }; // Жёлтый
    default:
      return { text: "Stable ➖", color: "#9ca3af" }; // Серый
  }
}

function displayUnits(items) {
  if (items.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #a0a0ab;">Юниты не найдены</p>`;
    return;
  }

  grid.innerHTML = items.map(unit => {
    const trendInfo = getTrendInfo(unit.trend);

    return `
      <div class="card">
        <img src="${unit.image}" alt="${unit.name}">
        <h3>${unit.name}</h3>
        <div class="info-row">
          <span>Редкость:</span>
          <span style="color: ${unit.rarity === 'Mythic' ? '#ef4444' : '#ec4899'}; font-weight: bold;">${unit.rarity}</span>
        </div>
        <div class="info-row">
          <span>Value:</span>
          <span class="value">${unit.value}</span>
        </div>
        <div class="info-row">
          <span>Demand:</span>
          <span class="demand" style="font-weight: bold;">${unit.demand}/10</span>
        </div>
        <div class="info-row">
          <span>Trend:</span>
          <span style="color: ${trendInfo.color}; font-weight: bold;">${trendInfo.text}</span>
        </div>
      </div>
    `;
  }).join("");
}

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  const filtered = units.filter(u => 
    u.name.toLowerCase().includes(query) ||
    u.rarity.toLowerCase().includes(query) ||
    u.demand.toString().includes(query) ||
    (u.trend && u.trend.toLowerCase().includes(query))
  );
  displayUnits(filtered);
});

displayUnits(units);
   
