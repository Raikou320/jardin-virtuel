const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();
const rewards = [
  { day: 1, label: "🌱 Graine" },
  { day: 2, label: "🌼 Fleur" },
  { day: 3, label: "🍒 Cerise" },
  { day: 4, label: "🎁 BOOSTER" },
];
const inventory = JSON.parse(localStorage.getItem("inventory")) ?? { "🌼 Fleur": 1, "Arbre": 0, "🍒 Cerise": 0 };
const inventoryElement = document.getElementById("inventory");
inventoryElement.innerText = Object.entries(inventory)
  .map(([item, count]) => `${item}: ${count}`)
  .join(", ");
const rewardsBox = document.createElement('div');
rewardsBox.id = 'rewards';


const lastConnexion = JSON.parse(localStorage.getItem("last-connexion")) ?? {};
const connexionsInMonth =
  JSON.parse(localStorage.getItem("connexions-in-month")) ?? 0;
const isNewConnexion =
  lastConnexion.day !== day ||
  lastConnexion.month !== month ||
  lastConnexion.year !== year;

if (isNewConnexion) {
  localStorage.setItem(
    "connexions-in-month",
    JSON.stringify(connexionsInMonth + 1)
  );
  console.log(
    "Connexion enregistrée ! Total ce mois-ci :",
    connexionsInMonth + 1
  );
  localStorage.setItem("last-connexion", JSON.stringify({ day, month, year }));
}

if (connexionsInMonth + (isNewConnexion ? 1 : 0) >= 4) {
  console.log("🎁 BOOSTER débloqué !");
}

rewards.forEach(([day, label]) => {
  const box = document.createElement('div');
  box.innerText = label;
  box.classList.add('reward-box');
  if (connexionsInMonth >= day) box.classList.add("unlocked");
  if (box.classList.contains("unlocked") && isNewConnexion) {
    inventory[label.toLowerCase()] = (inventory[label.toLowerCase()] || 0) + 1;
  }
  rewardsBox.appendChild(box);
})