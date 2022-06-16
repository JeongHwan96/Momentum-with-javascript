const images = ["1.jpg", "2.jpg", "3.jpg"];
const choseImg = images[Math.floor(Math.random() * images.length)];
const bgimg = document.querySelector(".bgimg");
const bgImage = document.createElement("img");

bgImage.src = `img/${choseImg}`;
bgImage.className = "bgimg";
document.body.appendChild(bgImage);
