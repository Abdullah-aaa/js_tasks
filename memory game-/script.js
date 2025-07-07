const cards = [
  {
    name: "css",
    img: "https://img.icons8.com/?size=100&id=38273&format=png&color=000000",
  },
  {
    name: "html",
    img: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  },
  {
    name: "jquery",
    img: "https://img.icons8.com/?size=100&id=HKNzD81eiiSc&format=png&color=000000",
  },
  {
    name: "js",
    img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    name: "node",
    img: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000",
  },
  {
    name: "python",
    img: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
];

const gamecard = cards.concat(cards);

let suffle = Array.from(gamecard).sort(() => 0.5 - Math.random());

const parentDiv = document.getElementById("card-section");

for (let i = 0; i < suffle.length; i++) {
  let childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = suffle[i].name;
//childDiv.style.backgroundImage = `url(${suffle[i].img})`;

let frontDiv = document.createElement('div');
frontDiv.classList.add('frontCard');


let backDiv = document.createElement('div');
backDiv.classList.add('backCard');

  parentDiv.appendChild(childDiv);
  childDiv.appendChild(frontDiv);
  childDiv.appendChild(backDiv);
  backDiv.style.backgroundImage = `url(${suffle[i].img})`;
}
let counter = 0;
let firstcard = "";
let secondcard = "";

const card_match = () => {
  let selected = document.querySelectorAll(".card-select");
  selected.forEach((elemnt) => {
    counter = 0;
    elemnt.classList.add("matched");
    element.classList.remove("card-select");
  });
};

const resetGame = () => {
    firstcard = null; 
    secondcard = null;
    counter = 0;
  
    let selected = document.querySelectorAll(".card-select");
    selected.forEach((elemnt) => {
      elemnt.classList.remove("card-select");
    });
  };

parentDiv.addEventListener("click", (event) => {
  let curCard = event.target;

  if (curCard.id === "card-section") {
    // for not selecting the hole section tag
    return false;
  }
  counter++;
  if (counter < 3) {
    // for not selecting more then 2

    if (counter === 1) {
      firstcard = curCard.parentNode.dataset.name;
      curCard.parentNode.classList.add("card-select");
    } else {
      secondcard = curCard.parentNode.dataset.name;
      curCard.parentNode.classList.add("card-select");
    }
    if (firstcard === secondcard) {
    card_match();
    } else {
        setTimeout(resetGame, 3000);
    }
  }
});
