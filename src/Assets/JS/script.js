function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const currentDisplay = menu.style.display;
  menu.style.display =
    currentDisplay === "none" || currentDisplay === "" ? "flex" : "none";
}

function setMinReturnDate() {
  const departureDate = document.getElementById("departure-date").value;
  const returnDate = document.getElementById("return-date").value;
  const returnDateInput = document.getElementById("return-date");

  // If departure date is selected, set return date minimum to the next day
  if (departureDate) {
    const minDate = new Date(departureDate);
    minDate.setDate(minDate.getDate() + 1); // next day
    const formattedDate = minDate.toISOString().split("T")[0]; // format as YYYY-MM-DD
    returnDateInput.setAttribute("min", formattedDate);

    // If the return date is before the departure date, reset it to the minimum allowed
    if (returnDate && returnDate < formattedDate) {
      returnDateInput.value = formattedDate;
    }
  }
}

function toggleContent() {
  const extraContent = document.getElementById("extra-content");
  const button = document.getElementById("read-more-btn");

  if (extraContent.classList.contains("hidden")) {
    extraContent.classList.remove("hidden");
    button.textContent = "Read Less";
  } else {
    extraContent.classList.add("hidden");
    button.textContent = "Read More";
  }
}

function loadMore() {
  const hiddenServices = document.querySelectorAll("#service-grid .hidden");
  hiddenServices.forEach((service) => {
    service.classList.remove("hidden");
  });
  document.getElementById("load-more-btn").classList.add("hidden");
}

const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideWidth = 100;
let currentIndex = 1;

sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

function moveToNextSlide() {
  currentIndex++;
  sliderWrapper.style.transition = "transform 1s";
  sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

  if (currentIndex === totalSlides - 1) {
    setTimeout(() => {
      sliderWrapper.style.transition = "none";
      currentIndex = 1;
      sliderWrapper.style.transform = `translateX(-${
        currentIndex * slideWidth
      }%)`;
    }, 1000);
  }
}

setInterval(moveToNextSlide, 5000);
