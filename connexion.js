const now = new Date();
const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();
const connexionsInMonth = JSON.parse(
  localStorage.getItem("connexions-in-month")
) ?? 0;

const lastConnexion = JSON.parse(localStorage.getItem("last-connexion")) ?? {};
localStorage.setItem(
  "last-connexion",
  JSON.stringify({
    day,
    month,
    year,
  })
);

if (
  lastConnexion.day != day &&
  lastConnexion.month != month &&
  lastConnexion.year != year
) {
  localStorage.setItem('connexions-in-month', JSON.stringify(connexionsInMonth+1));
  console.log(localStorage.getItem('connexions-in-month'))
}

if (connexionsInMonth >= 4) {
    console.log('BOOSTER !');
}