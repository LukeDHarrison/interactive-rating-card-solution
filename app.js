const imgEl = document.getElementById("card-img");
const imgContainer = document.getElementById("card-img-container");
const confirmMessageEl = document.getElementById("confirmation-message");
const titleEl = document.getElementById("card-title");
const messageEl = document.getElementById("card-message");
const formEl = document.getElementById("card-form");
const formBtnEl = document.getElementById("form-btn");

// Helper functions

const setTextContent = function (element, value) {
  element.textContent = value;
};

const setImgSrc = function (img, src) {
  img.src = src;
};

const setIsLoading = function () {
  const loader = document.createElement("span");
  loader.classList.add("loader");
  formBtnEl.appendChild(loader);
};

const setSubmissionState = function () {
  formBtnEl.textContent = "Submitting";
  setIsLoading();
};

const setSubmittedRating = function () {
  let userRating = formEl.querySelector("input[name='user-rating']:checked");

  if (!userRating) {
    return null;
  }

  return userRating.value;
};

// Initiate App

const initiateApp = function () {
  setTextContent(titleEl, "How did we do?");
  setTextContent(
    messageEl,
    "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
  );
  setImgSrc(imgEl, "./images/icon-star.svg");
};

// Update UI

const updateUI = function () {
  // Retrieve and display user rating
  userRating = setSubmittedRating();
  setTextContent(confirmMessageEl, `You selected ${userRating} out of 5`);
  confirmMessageEl.style.display = "flex";

  // Remove form
  formEl.remove();

  // Update image
  setImgSrc(imgEl, "./images/illustration-thank-you.svg");
  imgContainer.style.width = "auto";

  // Update text
  setTextContent(titleEl, "Thank you!");
  titleEl.style.textAlign = "center";
  setTextContent(
    messageEl,
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
  );
  messageEl.style.textAlign = "center";
};

// Run on form submission

const onSubmitHandler = function (e) {
  e.preventDefault();

  userRating = setSubmittedRating();

  // Check if user entered a rating
  if (!userRating) {
    console.log("No entered value");
    confirmMessageEl.style.display = "flex";
    return setTextContent(confirmMessageEl, "Please enter a rating");
  }

  setSubmissionState();

  // Simulate form submission delay
  setTimeout(function () {
    updateUI();
  }, 1500);
};

formEl.addEventListener("submit", onSubmitHandler);

initiateApp();
