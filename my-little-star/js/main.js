const welcomeScreen = document.getElementById("welcome-screen");
const skyScreen = document.getElementById("sky-screen");

const fullscreenBtn = document.getElementById("fullscreen-btn");
const statusMessage = document.getElementById("status-message");

const mainStar = document.getElementById("main-star");

const messageModal = document.getElementById("message-modal");
const closeMessage = document.getElementById("close-message");

const messageTitle = document.getElementById("message-title");
const messageText = document.querySelector(".message-card p");

async function enterFullscreen() {
  const page = document.documentElement;

  if (document.fullscreenElement) return true;
  if (!page.requestFullscreen) return false;

  try {
    await page.requestFullscreen();
    return true;
  } catch (error) {
    console.warn("Fullscreen was not activated:", error);
    return false;
  }
}

function showSky() {
  welcomeScreen.classList.add("hidden");
  skyScreen.classList.remove("hidden");

  if (typeof startStarField === "function") {
    startStarField();
  }
}

fullscreenBtn.addEventListener("click", async () => {
  fullscreenBtn.disabled = true;
  statusMessage.textContent = "دارم آسمون اختصاصی رو آماده می‌کنم... ✨";

  await enterFullscreen();
  showSky();
});

function openStarMessage(title, message) {
  messageTitle.textContent = title;
  messageText.textContent = message;
  messageModal.classList.remove("hidden");
}

mainStar.addEventListener("click", () => {
  openStarMessage(
    "برای تو، نازنین ❤️",
    "هر ستاره‌ای در آسمان، بهانه‌ای برای یادآوری توست ❤️",
  );
});

function hideMessage() {
  messageModal.classList.add("hidden");
}

closeMessage.addEventListener("click", hideMessage);

messageModal.addEventListener("click", (event) => {
  if (event.target === messageModal) {
    hideMessage();
  }
});
