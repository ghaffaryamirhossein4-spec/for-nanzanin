const welcomeScreen = document.getElementById("welcome-screen");
const skyScreen = document.getElementById("sky-screen");
const fullscreenBtn = document.getElementById("fullscreen-btn");
const statusMessage = document.getElementById("status-message");

// نمایش آسمان
function showSky() {
  welcomeScreen.classList.add("hidden");
  skyScreen.classList.remove("hidden");
  startStarField();
}

// کلیک روی دکمه ورود
fullscreenBtn.addEventListener("click", async () => {
  fullscreenBtn.disabled = true;
  statusMessage.textContent = "داریم آسمون رو برات آماده می‌کنیم... ✨";

  const success = await enterFullscreen();

  if (success) {
    statusMessage.textContent = "خوش اومدی! ❤️";
  } else {
    statusMessage.textContent = "حالت نمایش عادی فعال شد ❤️";
  }

  // در هر دو حالت وارد سایت می‌شویم
  showSky();
});

// تشخیص خروج از تمام‌صفحه
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    console.log("Fullscreen mode exited.");
  }
});
