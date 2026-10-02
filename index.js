let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight Dragon"],
    "button funtions": [goStore, goCave, fightDragon],
    text: 'You are in town . you can see a sign that says "store" ',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button funtions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store",
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button funtions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave, You see some monsters",
  },
];

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button funtions"][0];
  button2.onclick = location["button funtions"][1];
  button3.onclick = location["button funtions"][2];
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
}
function goStore() {
  console.log("clicking store");
  update(locations[1]);
}
function goCave() {
  update(locations[2]);
}
function fightSlime() {}
function fightBeast() {}
function fightDragon() {}
function buyHealth() {}
function buyWeapon() {}
