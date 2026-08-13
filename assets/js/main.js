const body = document.body;
const themeBtn = document.getElementById("theme-btn");
const mobileThemeBtn = document.getElementById("mobile-theme-btn");
const enBtn = document.getElementById("en-btn");
const ruBtn = document.getElementById("ru-btn");
const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");

function readStore(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStore(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // The preference is optional when storage is unavailable.
  }
}

function currentLang() {
  return body.classList.contains("ru") ? "ru" : "en";
}

function updateThemeLabels(theme) {
  const showLight = theme === "dark";
  const label =
    currentLang() === "ru"
      ? showLight
        ? "Светлая"
        : "Тёмная"
      : showLight
        ? "Light"
        : "Dark";

  if (themeBtn) themeBtn.textContent = label;
  if (mobileThemeBtn) mobileThemeBtn.textContent = label;
}

function applyTheme(theme) {
  const next = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  themeBtn?.setAttribute("aria-pressed", String(next === "dark"));
  mobileThemeBtn?.setAttribute("aria-pressed", String(next === "dark"));
  updateThemeLabels(next);
  writeStore("theme", next);
}

function applyLang(lang) {
  const next = lang === "ru" ? "ru" : "en";
  document.documentElement.lang = next;
  body.classList.toggle("ru", next === "ru");
  body.classList.toggle("en", next === "en");
  enBtn?.classList.toggle("is-active", next === "en");
  ruBtn?.classList.toggle("is-active", next === "ru");
  enBtn?.setAttribute("aria-pressed", String(next === "en"));
  ruBtn?.setAttribute("aria-pressed", String(next === "ru"));

  navToggle?.setAttribute(
    "aria-label",
    next === "ru" ? "Открыть меню" : "Open menu",
  );
  updateThemeLabels(document.documentElement.dataset.theme);
  writeStore("lang", next);
}

function setMenu(open) {
  mobileMenu?.classList.toggle("is-open", open);
  navToggle?.setAttribute("aria-expanded", String(open));
  navToggle?.setAttribute(
    "aria-label",
    currentLang() === "ru"
      ? open
        ? "Закрыть меню"
        : "Открыть меню"
      : open
        ? "Close menu"
        : "Open menu",
  );
}

function toggleTheme() {
  applyTheme(
    document.documentElement.dataset.theme === "dark" ? "light" : "dark",
  );
}

themeBtn?.addEventListener("click", toggleTheme);
mobileThemeBtn?.addEventListener("click", toggleTheme);
enBtn?.addEventListener("click", () => applyLang("en"));
ruBtn?.addEventListener("click", () => applyLang("ru"));
navToggle?.addEventListener("click", () => {
  setMenu(!mobileMenu?.classList.contains("is-open"));
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

document.addEventListener("click", (event) => {
  if (
    mobileMenu?.classList.contains("is-open") &&
    !mobileMenu.contains(event.target) &&
    !navToggle?.contains(event.target)
  ) {
    setMenu(false);
  }
});

const savedTheme = readStore("theme");
const preferredTheme =
  savedTheme ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
const savedLang = readStore("lang");
const preferredLang =
  savedLang || (navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en");

applyTheme(preferredTheme);
applyLang(preferredLang);

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const observedSections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      navLinks.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${visible.target.id}`,
        );
      });
    },
    { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.6] },
  );

  observedSections.forEach((section) => observer.observe(section));
}
