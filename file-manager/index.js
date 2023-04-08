// In real app replace with:
// import Flmngr from "flmngr";
import Flmngr from "flmngr";

Flmngr.load({
  apiKey: "FLMNFLMN",
  urlFileManager: 'https://assets.gd-hub.eu/flmngr',
  urlFiles: 'https://assets.gd-hub.eu/files/'
}, {
  onFlmngrLoaded: () => {
    attachOnClickListenerToButton();
  }
});

function attachOnClickListenerToButton() {
  let elBtn = document.getElementById("btn");

  // Style button as ready to be pressed
  elBtn.style.opacity = 1;
  elBtn.style.cursor = "pointer";
  let elLoading = document.getElementById("loading");
  elLoading.parentElement.removeChild(elLoading);

  // Add a listener for selecting files
  elBtn.addEventListener("click", () => {
    selectFiles();
  });  
}

function selectFiles() {
  Flmngr.open({
    isMultiple: false,
    acceptExtensions: ["png", "jpeg", "jpg", "webp", "gif"],
    onFinish: (files) => {
      showSelectedImage(files);
    }
  });
}

function showSelectedImage(files) {
  let elImages = document.getElementById("images");
  elImages.innerHTML = "";

  let file = files[0];

  let el = document.createElement("div");
  el.className = "image";
  elImages.appendChild(el);   

  let elImg = document.createElement("img");
  elImg.src = file.url;
  elImg.alt = "Image selected in Flmngr";
  el.appendChild(elImg);

  let elP = document.createElement("p");
  elP.textContent = file.url;
  el.appendChild(elP);
}