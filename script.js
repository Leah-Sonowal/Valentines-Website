const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gif = document.getElementById("gif");
const message = document.getElementById("message");

let page = 0;
let yesScale = 1;
let noScale = 1;

// All page data in ONE place ❤️
const pages = [
  {
    text: "Will u be my Valentine? ",
    gif: "gifs/gif1.gif",
    pink: 0
  },
  {
    text: "I'll make you coffee!",
    gif: "gifs/gif2.gif",
    pink: 40
  },
  {
    text: "Come on, I know you want to!",
    gif: "gifs/gif3.gif",
    pink: 80
  },
  {
    text: "Please think again dehaaaaaa!",
    gif: "gifs/gif4.gif",
    pink: 120
  },
  {
    text: "You're breaking my heart T.T",
    gif: "gifs/gif5.gif",
    pink: 160
  }
];

noBtn.addEventListener("click", () => {

  // Stop changing pages after last one
  if (page < pages.length - 1) {
    page++;
  }

  // Update content
  message.textContent = pages[page].text;
  gif.src = pages[page].gif;

  // Button scaling
  yesScale += 0.18;
  yesBtn.style.transform = `scale(${yesScale})`;

  noScale -= 0.1;
  noScale = Math.max(noScale, 0.5);
  noBtn.style.transform = `scale(${noScale})`;

  // Background pink
  document.body.style.background = `
    linear-gradient(135deg,
    rgb(255, ${255 - pages[page].pink}, ${255 - pages[page].pink}),
    rgb(255, 180, 210))
  `;

  // SHAKE on last page
  if (page === pages.length - 1) {
    noBtn.classList.add("shake");
  }
});


yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="container">
      <h1>YOU WIN 💖</h1>
      <p>Valentine Acquired 🎮</p>
      <img src="gifs/gif6.gif" style="width:250px;">
    </div>
  `;

  // Generate pixel hearts
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(heart);
  }
});


