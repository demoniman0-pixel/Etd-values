const units = [
  // --- Скриншот 1: Нижний ряд (Mythic) ---
  { name: "Banker", value: "150,000", demand: "Medium", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Banker" },
  { name: "Star Searcher", value: "120,000", demand: "Medium", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Star+Searcher" },
  { name: "Swimmer", value: "100,000", demand: "Low", rarity: "Mythic", image: "https://i.ibb.co/1tfxH0R8/IMG-20260904-225705.jpg" },
  { name: "Mermaid", value: "150,000", demand: "High", rarity: "Mythic", image: "https://i.ibb.co/HDnjFqr3/IMG-20260904-225609.jpg" },
  { name: "Seashell", value: "150,000", demand: "Medium", rarity: "Mythic", image: "https://i.ibb.co/rffVFc4g/IMG-20260904-225805.jpg" },

  // --- Скриншот 1: Средний ряд (Mythic) ---
  { name: "Soul Reaper", value: "200,000", demand: "High", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Soul+Reaper" },
  { name: "Electrician", value: "100,000", demand: "Medium", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Electrician" },
  { name: "Alchemist", value: "100,000", demand: "Medium", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Alchemist" },
  { name: "White Ninja", value: "80,000", demand: "High", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=White+Ninja" },
  { name: "Diamond White", value: "200,000", demand: "High", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Diamond+White" },
  { name: "Snake", value: "100,000", demand: "Medium", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Snake" },

  // --- Скриншот 1: Верхний ряд (Mythic) ---
  { name: "Shinobi", value: "70,000", demand: "High", rarity: "Mythic", image: "https://i.ibb.co/G3dsk01M/IMG-20260905-000813.jpg" },
  { name: "Yeti", value: "70,000", demand: "Medium", rarity: "Mythic", image: "https://i.ibb.co/4wpf6mqq/IMG-20260905-000705.jpg" },
  { name: "Builder", value: "70,000", demand: "Low", rarity: "Mythic", image: "https://i.ibb.co/tpxcDGhr/IMG-20260905-000411.jpg" },
  { name: "Goblin Wizard", value: "70,000", demand: "High", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Goblin+Wizard" },
  { name: "Dark Jonin", value: "70,000", demand: "Insane", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Dark+Jonin" },
  { name: "Ghost Pirate", value: "70,000", demand: "High", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Ghost+Pirate" },

  // --- Скриншот 2: Нижний ряд (Legendary & Mythic) ---
  { name: "Groll", value: "1000", demand: "Low", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Groll" },
  { name: "Sniper King", value: "50,000", demand: "High", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Sniper+King" },
  { name: "Range Bean", value: "70,000", demand: "High", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Range+Bean" },
  { name: "Excalibur", value: "100,000", demand: "Insane", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Excalibur" },
  { name: "Sunflower", value: "70,000", demand: "Medium", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Sunflower" },
  { name: "Minigunner", value: "70,000", demand: "High", rarity: "Mythic", image: "https://placehold.co/200x200/1e1e2d/ef4444?text=Minigunner" },

  // --- Скриншот 2: Средний ряд (Legendary) ---
  { name: "Arcane Mage", value: "2,000", demand: "Low", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Arcane+Mage" },
  { name: "Red Dragon", value: "1,500", demand: "Medium", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Red+Dragon" },
  { name: "Car Mechanic", value: "1,000", demand: "Low", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Car+Mechanic" },
  { name: "Frost Mage", value: "1,000", demand: "Medium", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Frost+Mage" },
  { name: "Electric Fence", value: "3,500", demand: "Low", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Electric+Fence" },
  { name: "Electric Shroom", value: "1,500", demand: "Low", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Electric+Shroom" },

  // --- Скриншот 2: Верхний ряд (Legendary) ---
  { name: "BeeHive", value: "1,000", demand: "Low", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=BeeHive" },
  { name: "Mushroom", value: "2,500", demand: "Low", rarity: "Legendary", image: "https://placehold.co/200x200/1e1e2d/ec4899?text=Mushroom" }
];

const grid = document.getElementById("unitsGrid");
const searchInput = document.getElementById("searchInput");

function displayUnits(items) {
  if (items.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #a0a0ab;">Юниты не найдены</p>`;
    return;
  }

  grid.innerHTML = items.map(unit => `
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
        <span class="demand">${unit.demand}</span>
      </div>
    </div>
  `).join("");
}

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  const filtered = units.filter(u => 
    u.name.toLowerCase().includes(query) ||
    u.rarity.toLowerCase().includes(query) ||
    u.demand.toLowerCase().includes(query)
  );
  displayUnits(filtered);
});

displayUnits(units);
   
