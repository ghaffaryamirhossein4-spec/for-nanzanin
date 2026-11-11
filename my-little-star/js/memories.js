
// =========================
// Hidden Stars Logic
// =========================

const memoryStars = document.querySelectorAll(".memory-star");
const discoveryCounter = document.getElementById("discovery-counter");
const constellationArea = document.querySelector(".constellation-area");

const discoveredStars = new Set();

const persianNumbers = ["۰", "۱", "۲", "۳"];

function updateDiscoveryCounter() {
  const count = discoveredStars.size;

  discoveryCounter.textContent =
    `${persianNumbers[count]} از ۳ ستاره کشف شده ✨`;

  if (count === memoryStars.length) {
    constellationArea.classList.add("completed");

    discoveryCounter.textContent =
      "آفرین! تمام ستاره‌ها رو پیدا کردی ❤️";
  }
}

memoryStars.forEach((star, index) => {
  star.addEventListener("click", () => {

    // بازکردن پیام با تابع مشترک
    openStarMessage(
      star.dataset.title,
      star.dataset.message
    );

    // ثبت اولین کشف
    if (!discoveredStars.has(index)) {
      discoveredStars.add(index);
      star.classList.add("discovered");

      updateDiscoveryCounter();
    }
  });
});

updateDiscoveryCounter();
