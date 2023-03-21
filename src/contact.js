//eveniment 1
const btn = document.querySelector("#logo");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

//eveniment 2
const contact = document.getElementById("contact");
contact.addEventListener("click", () => {
  alert("Bine ai venit pe site-ul nostru");
});

//eveniment 3
const form = document.getElementById("form");

form.addEventListener("focus", (event) => {
    event.target.style.background = "pink";
  },
  true
);

