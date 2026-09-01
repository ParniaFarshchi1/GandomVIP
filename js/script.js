// //////////////////slider///////////////////////
function updateSlider(container, page) {
  const boxes = container.querySelector(".boxes");
  const bullets = container.querySelectorAll(".bullets span");

  boxes.dataset.page = page;
  boxes.style.transform = `translateX(${-page * 100}%)`;

  bullets.forEach((b) => b.classList.remove("active"));
  bullets[page].classList.add("active");
}

function plusIndex(btn, dir) {
  const container = btn.parentElement;
  const boxes = container.querySelector(".boxes");

  let page = Number(boxes.dataset.page || 0);

  page += dir;

  if (page > 1) page = 0;
  if (page < 0) page = 1;

  updateSlider(container, page);
}

function currentSlide(bullet, page) {
  const container = bullet.closest(".contain-box");

  updateSlider(container, page);
}
// /////////////acardeon////////////////
let questions = document.querySelectorAll(".question");
let answer = document.querySelectorAll(".answer");
let arrow = document.querySelectorAll(".arrow");
let pinkText = document.querySelectorAll(".que");

questions.forEach((question, i) => {
  question.addEventListener("click", function open() {
    let isOpen = answer[i].classList.contains("active");

    answer.forEach((a) => a.classList.remove("active"));
    pinkText.forEach((p) => p.classList.remove("pinktext"));
    arrow.forEach((ar) => ar.classList.remove("rotate"));

    if (!isOpen) {
      answer[i].classList.add("active");
      pinkText[i].classList.add("pinktext");
      arrow[i].classList.add("rotate");
    }
  });
});
// //////////////////location target////////////////////////
function goToSection(id) {
  let section = document.getElementById(id);

  section.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  section.querySelector("p").classList.add("highlight");
}
// ///////////////scroll to top////////////////
let btn = document.querySelector(".go-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});
btn.addEventListener("click", function () {
  console.log(btn);
  let section = document.getElementById("sec1");
  section.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});
// ////////////////////////searsh///////////////////////////////
let searsh = document.getElementById("search");
searsh.addEventListener("click", function openSearchPupop() {
  let modal = document.getElementById("modal");
  console.log(modal);
  modal.classList.add("show");
  closeBtn();
});
let closeBtnTag = document.getElementById("close-btn");
closeBtnTag.addEventListener("click", function closeBtn() {
  let modal = document.getElementById("modal");

  console.log(modal)
  modal.classList.remove("show");
});



// /////////////////////////chat box///////////////////////////////

let chatBtn = document.getElementById("massage");
let socials = document.getElementById("socials");
let closeChatBtn = document.getElementById("closeChat");

chatBtn.addEventListener("mouseenter", () => {
  socials.classList.add("showChat");
  console.log(socials);

  closeChatBtn.classList.add("closer");
  chatBtn.classList.add("hidden");
  // chatBtn.style.opacity="0"

  console.log(closeChatBtn);
});
chatBtn.addEventListener("click", () => {
  socials.classList.add("showChat");
  console.log(socials);

  closeChatBtn.classList.add("closer");
  chatBtn.classList.add("hidden");
  // chatBtn.style.opacity="0"

  console.log(closeChatBtn);
});

// chatBtn.addEventListener("click", () => {
//   socials.classList.remove("showChat");
//   closeChatBtn.classList.remove("closer");
//   chatBtn.classList.remove("hidden");
// });

document.addEventListener("click", (e) => {
  if (!chatBtn.contains(e.target) && !socials.contains(e.target)) {
    socials.classList.remove("showChat");
    closeChatBtn.classList.remove("closer");
    chatBtn.classList.remove("hidden");
  }
});

// ///////////////////////////log in//////////////////////////////////
let usericon = document.getElementById("user");
usericon.addEventListener("click", function logIn() {
  let logInPannel = document.getElementById("login-user");
  // console.log(modal);
  logInPannel.classList.add("show");
  console.log(logInPannel)
  closeLoginPopup();
});
let closeLogin = document.getElementById("close-login");
closeLogin.addEventListener("click", function closeLoginPopup() {
  let logInPannel = document.getElementById("login-user");

  logInPannel.classList.remove("show");
});
// ///////////////////////////sign in//////////////////////////////////


function signin(){
    let signinPannel = document.getElementById("signin-user");
  // console.log(modal);
  signinPannel.classList.add("show");
  console.log(signinPannel)
  closesigninPopup();
}

let closesignin = document.getElementById("close-signin");
closesignin.addEventListener("click", function closesigninPopup() {
  let signinPannel = document.getElementById("signin-user");
  

  signinPannel.classList.remove("show");
});

// function signin() {
//   let signinPannel = document.getElementById("signin-user");
//   signinPannel.classList.add("show");
// }

// let closesignin = document.getElementById("close-signin");

// closesignin.addEventListener("click", function () {
//   let signinPannel = document.getElementById("signin-user");
//   signinPannel.classList.remove("show");
// });
// ///////////////////////////sign in next birth//////////////////////////////////



function nextBirth() {
  let nextBirthPannel = document.getElementById("next-sign-birthday");
  nextBirthPannel.classList.add("show");
}

let closenextBirth = document.getElementById("close-next-birthday");

closenextBirth.addEventListener("click", function () {
  let nextBirthPannel = document.getElementById("next-sign-birthday");
  nextBirthPannel.classList.remove("show");
});
// ///////////////////////////sign in next gender//////////////////////////////////



function nextgender() {
  let nextGenderPannel = document.getElementById("next-sign-gender");
  nextGenderPannel.classList.add("show");
}

let closenextGender = document.getElementById("close-next-gender");

closenextGender.addEventListener("click", function () {
  let nextGenderPannel = document.getElementById("next-sign-gender");
  nextGenderPannel.classList.remove("show");
});
// ///////////////////////////sign in next email//////////////////////////////////




function nextemail() {
  let nextemailPannel = document.getElementById("next-sign-email");
  nextemailPannel.classList.add("show");
}

let closenextemail = document.getElementById("close-next-email");

closenextemail.addEventListener("click", function () {
  let nextemailPannel = document.getElementById("next-sign-email");
  nextemailPannel.classList.remove("show");
});
// ///////////////////////////sign in next code//////////////////////////////////



function nextcode() {
  let nextcodePannel = document.getElementById("next-sign-code");
  nextcodePannel.classList.add("show");
}

let closenextcode = document.getElementById("close-next-code");

closenextcode.addEventListener("click", function () {
  let nextcodePannel = document.getElementById("next-sign-code");
  nextcodePannel.classList.remove("show");
});

// ////////////////// SEARCH PRODUCTS //////////////////

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const products = document.querySelectorAll(".box");

searchInput.addEventListener("input", function () {

  const searchText = this.value.trim();

  searchResults.innerHTML = "";

  if (searchText === "") {
    return;
  }

  products.forEach(function (product) {

    const productName = product.querySelector(".text-box p");
    const productPrice = product.querySelector(".text-box span");
    const productImage = product.querySelector(".img-box img");

    if (!productName , !productPrice,  !productImage) {
      return;
    }

    if (
      productName.textContent
        .toLowerCase()
        .includes(searchText.toLowerCase())
    ) {

      const result = document.createElement("div");

      result.classList.add("search-result");

      result.innerHTML = `
      <div class="search-result-info">
        <img src="${productImage.src}" alt="">

          <p>${productName.textContent}</p>
        </div>
      `;

      searchResults.appendChild(result);
    }

  });

  if (searchResults.innerHTML === "") {

    searchResults.innerHTML = `
      <p class="no-result">محصولی پیدا نشد</p>
    `;

  }

});

console.log(searchResults.innerHTML);