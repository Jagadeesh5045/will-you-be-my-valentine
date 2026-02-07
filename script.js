const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gif = document.getElementById("gif");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const noText = document.getElementById("noText");

let musicStarted = false;

function playMusic() {
  if (musicStarted) return;
  const iframe = document.getElementById("ytMusic");
  iframe.src += "&autoplay=1&loop=1&playlist=JJxF1x7R7Lk";
  musicStarted = true;
}

document.body.addEventListener("click", playMusic, { once: true });

const phrases = [
  "kinder joy konistha?",
  "lekapothey veg manchuria?",
  "Pretty please",
  "With a chocolate ?",
  "What about a Burger",
  "PLEASE POOKIE",
  "But :*(",
  "I am going to die",
  "Yep im dead",
  "Pookie are u there ?",
  "please babe",
  ":((((",
  "PRETTY PLEASE",
  "No :("
];

let i = 0;

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 220 - 110;
  const y = Math.random() * 140 - 70;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  noText.textContent = phrases[i % phrases.length];
  i++;
});

yesBtn.addEventListener("click", () => {
  gif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
  title.innerHTML = "I love you ❤️💖";
  subtitle.innerHTML = "Aashiqui aa gayi… 😭💞";
  noBtn.remove();
  noText.innerHTML = "";
});
